import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USERNAME = "admin";
const PASSWORD = "@qwertyuiop1234567890A";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const auth = req.headers.get("authorization");

    if (!auth) {
      return new NextResponse("Auth required", {
        status: 401,
        headers: { "WWW-Authenticate": "Basic" },
      });
    }

    try {
      const base64 = auth.split(" ")[1];
      const decoded = atob(base64);
      const [user, pass] = decoded.split(":");

      if (user !== USERNAME || pass !== PASSWORD) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
    } catch (e) {
      return new NextResponse("Invalid Auth", { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
