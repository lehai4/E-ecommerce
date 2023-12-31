export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/:path",
    "/product/:path",
    "/shop/:path",
    "/blog/:path",
    "/contact/:path",
    "/cart",
  ],
};
