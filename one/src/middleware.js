import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
//   console.log(request.URL);
//   if (request.nextUrl.pathname === "/about") {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

return NextResponse.redirect(new URL("/login", request.url));

}

export const config = {
  matcher: ["/about/:path*", "/study/:path*"],
};
