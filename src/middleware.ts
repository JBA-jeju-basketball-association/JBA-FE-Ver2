import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest, response: NextResponse) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  if (response.type === "error") {
    console.log("에러 생발생");
  }

  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAdmin =
    session?.role === "ROLE_ADMIN" || session?.role === "ROLE_MASTER";

  const adminPath = AdminPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path),
  );

  const userPath = UserPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path),
  );

  if (userPath && !session) {
    // 관리자 권한이 없으면 로그인 페이지로 리다이렉션
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (adminPath && !isAdmin) {
    // 관리자 권한이 없으면 로그인 페이지로 리다이렉션
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname === "/login" && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const AdminPaths = [
  "/jeju-competition/info/add",
  "/jeju-competition/info/update",
  "/jeju-competition/schedule/add",
  "/jeju-competition/schedule/update",
  "/jeju-competition/result/add",
  "/jeju-competition/result/update",
];

export const UserPaths = ["/my-page"];
