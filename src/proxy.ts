import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token =
    request.cookies.get("access_token")?.value;

  console.log("🔥 PROXY:", request.nextUrl.pathname);
  console.log("🍪 COOKIES:", request.cookies.getAll());
  console.log("🔑 TOKEN:", !!token);

  if (!token) {
    console.log("❌ SEM TOKEN -> LOGIN");

    return NextResponse.redirect(
      new URL("/login", request.url),
    );
  }

  console.log("✅ TOKEN ENCONTRADO -> DASHBOARD");

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};