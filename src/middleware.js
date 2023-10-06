import { NextResponse } from "next/server";

const protectedRoutes = [
  "/usuario",
  "/usuario/blog",
  "/usuario/chef",
  "/usuario/nutricion",
  "/usuario/suscripcion",
];
const publicRoutes = ["/login", "/signup"];

export default async function middleware(req, res) {
  return new Promise((resolve, reject) => {
    let cookie = req.cookies.get("isAuthenticated");
    console.log(req.url);

    const isProtectedRoute = protectedRoutes.includes(req.nextUrl.pathname);
    const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);

    if (!cookie && isProtectedRoute) {
      const absoluteURL = new URL("/login", req.nextUrl.origin);
      resolve(NextResponse.redirect(absoluteURL.toString()));
    } else if (cookie && isPublicRoute) {
      const absoluteURL = new URL("/usuario", req.nextUrl.origin);
      resolve(NextResponse.redirect(absoluteURL.toString()));
    } else {
      resolve(NextResponse.next());
    }
  });
}
