// import { withAuth } from "next-auth/middleware";

import { NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export function middleware() {
  const res = new NextResponse();

  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append("Access-Control-Allow-Origin", "*"); // replace this your actual origin
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

export const config = {
  matcher: "/api/:path*",
};

// export default withAuth(function middleware(req) {}, {
//   callbacks: {
//     authorized: ({ req, token }) => {
//       console.log("Something");
//       if (token == null) {
//         return false;
//       }
//       return true;
//     },
//   },
// });
