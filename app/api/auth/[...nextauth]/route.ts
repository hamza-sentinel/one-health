import authAdmin from "@/app/utils/authAdmin";
import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const res = await authAdmin(credentials.username, credentials.password);
        if (!res) return null;
        return { ...res.user, token: res.token };
      },
    }),
  ],
  jwt: {
    maxAge: 12 * 60 * 60, // 12 hours expiry date
  },
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
