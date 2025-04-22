import { createClient } from "@/shared/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  console.log("supabase", supabase);

  const { data, error } = await supabase.from("fills").select(`
    id,
    created_at,
    title,
    description,
    url,
    category:category_id ( id, name )
  `);

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
