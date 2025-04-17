// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req }); // next-auth 토큰 가져옴
  const isAuth = !!token;

  const pathname = req.nextUrl.pathname;

  const isProtectedPage = pathname.startsWith("/fills");

  // 1. 로그인 안 한 사람이 /fills 접근하면 → /
  if (!isAuth && isProtectedPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next(); // 통과
}

export const config = {
  matcher: ["/", "/login", "/fills"],
};
