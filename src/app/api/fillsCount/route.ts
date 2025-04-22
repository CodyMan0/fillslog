import { CategoryCount } from "@/entites";
import { createClient } from "@/shared/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  console.log("supabase", supabase);

  const { data, error } = await supabase
    .from("fills")
    .select("id, category_id, categories(name)");

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

  const counts = data.reduce<Record<string, CategoryCount>>((acc, fill) => {
    const catName = fill.categories?.name ?? "Uncategorized";

    const key = catName ?? "null"; // 객체 키는 string이니까 null 처리

    if (!acc[key]) {
      acc[key] = {
        count: 1,
      };
    } else {
      acc[key].count += 1;
    }

    return acc;
  }, {});

  return NextResponse.json(
    { message: "success fetching", data: counts },
    {
      status: 200,
    }
  );
}
