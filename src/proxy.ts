import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Next.js 16+ requires the file to be 'proxy.ts' and the function to be 'proxy'
export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const session = req.cookies.get("admin_session")?.value;

    if (!session || session !== "authenticated") {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
