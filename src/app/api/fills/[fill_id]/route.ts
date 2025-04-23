import { createClient } from "@/shared/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { fill_id: string } }
) {
  const supabase = await createClient();

  const { fill_id } = params;

  if (!fill_id) {
    return NextResponse.json({ error: "fill_id is required" }, { status: 400 });
  }

  const { data, error } = await supabase
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
    .eq("id", Number(fill_id))
    .single(); // 단일 데이터만 가져오기

  if (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data", details: error.message },
      { status: 500 }
    );
  }

  if (!data) {
    return NextResponse.json({ message: "No data found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "success fetching", data },
    { status: 200 }
  );
}

export async function DELETE(request: NextRequest) {
  const supabase = await createClient();

  const url = new URL(request.url);
  const fillId = url.pathname.split("/").pop(); // "/api/fills/123" → "123"

  if (!fillId) {
    return NextResponse.json({ error: "fill_id is required" }, { status: 400 });
  }

  const { error } = await supabase
    .from("fills")
    .delete()
    .eq("id", Number(fillId));

  if (error) {
    console.error("Error deleting data:", error);
    return NextResponse.json(
      { error: "Failed to delete fill", details: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Fill deleted successfully" },
    { status: 200 }
  );
}
