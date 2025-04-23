import { createClient } from "@/shared/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = await createClient();

  // 쿼리 파라미터에서 category_id 가져오기
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get("categoryId");

  let query = supabase
    .from("fills")
    .select(
      `
    id,
    created_at,
    title,
    description,
    url,
    category:category_id ( id, name )
  `
    )
    .order("created_at", { ascending: false }); // ✅ 최신순 정렬 추가;

  // categoryName가 있으면 필터링 없으면 원본 반환
  if (categoryId) {
    query = query.eq("category_id", Number(categoryId));
  }

  const { data, error } = await query;

  if (error) {
    // 401 Unauthorized: 인증 관련 에러 처리
    if (error.code === "PGRST401" || error.message.includes("JWT")) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }

    // 500 Internal Server Error: 기타 서버 에러 처리
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }

  if (!data || data.length === 0) {
    return NextResponse.json(
      { message: "No data found", data: [] },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { message: "success fetching", data: data },
    {
      status: 200,
    }
  );
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();

  try {
    // 요청 본문에서 데이터 가져오기
    const body = await request.json();
    console.log("body", body);

    // Supabase에 데이터 삽입
    const { data, error } = await supabase.from("fills").insert([
      {
        title: body.title,
        url: body.url,
        description: body.description,
        category_id: body.category,
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
      return NextResponse.json(
        { error: "Failed to insert data", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Data inserted successfully", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
