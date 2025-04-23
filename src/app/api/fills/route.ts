import { createClient } from "@/shared/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = await createClient();

  // 쿼리 파라미터에서 category_id 가져오기
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get("categoryId");

  let query = supabase.from("fills").select(`
    id,
    created_at,
    title,
    description,
    url,
    category:category_id ( id, name )
  `);

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
