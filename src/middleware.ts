// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  }); // next-auth 토큰 가져옴
  console.log("[middleware] 실행됨, token:", token);
  const isAuth = !!token;

  const pathname = req.nextUrl.pathname;

  const protectedPaths = ["/fills", "/my"];

  const isProtectedPage = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );
  const isLandingPage = pathname === "/";

  // 1. 로그인 안 한 사람이 /fills 접근하면 → /
  if (!isAuth && isProtectedPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  // 2. 로그인 한 사람이 / 접근하면 → /fills
  if (isAuth && isLandingPage) {
    return NextResponse.redirect(new URL("/fills", req.url));
  }

  return NextResponse.next(); // 통과
}
export const config = {
  matcher: ["/", "/fills/:path*", "/my"],
};
