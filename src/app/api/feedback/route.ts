import { createClient } from "@/shared/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const supabase = await createClient();

  if (!body.message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const { error } = await supabase.from("feedback").insert({
    message: body.message,
  });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "피드백이 성공적으로 제출되었습니다!" });
}
