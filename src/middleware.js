import { NextResponse } from "next/server";

const protectedUserRoutes = [
  "/usuario",
  "/usuario/blog",
  "/usuario/chef",
  "/usuario/nutricion",
  "/usuario/suscripcion",
];
const protectedAdminRoutes = [
  "/admin/blog",
  "/admin/chef",
  "/admin/usuarios",
];
const publicUserRoutes = ["/login", "/signup"];
const publicAdminRoutes = ["/admin/login"];

export default async function middleware(req, res) {
  return new Promise((resolve) => {
    const cookie = req.cookies.get("isAuthenticated");
    const userType = req.cookies.get('userType');
    const { pathname, origin } = req.nextUrl;

    console.log(userType);
    console.log(cookie);

    const isProtectedUserRoute = protectedUserRoutes.includes(pathname);
    const isProtectedAdminRoute = protectedAdminRoutes.includes(pathname);
    const isPublicUserRoute = publicUserRoutes.includes(pathname);
    const isPublicAdminRoute = publicAdminRoutes.includes(pathname);

    if (!cookie && !userType && isProtectedUserRoute) {
      resolve(NextResponse.redirect(`${origin}/login`));
    } else if (cookie && userType.value === 'usuario' && (isPublicUserRoute || isProtectedAdminRoute)) {
      resolve(NextResponse.redirect(`${origin}/usuario`));
    } else if (cookie && userType.value === 'admin' && isProtectedUserRoute) {
      resolve(NextResponse.redirect(`${origin}/admin/usuario`));
    } else if (!cookie && !userType && isProtectedAdminRoute) {
      resolve(NextResponse.redirect(`${origin}/admin/login`));
    } else if (cookie && userType.value === 'admin' && isPublicAdminRoute) {
      resolve(NextResponse.redirect(`${origin}/admin/usuarios`));
    } else {
      console.log('Otra ruta')
      resolve(NextResponse.next());
    }
  });
}
