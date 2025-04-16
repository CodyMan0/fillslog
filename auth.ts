import NextAuth from "next-auth";

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update, // Beta!
} = NextAuth({
  providers: [
    // ...
  ],
  session: {
    strategy: "jwt", // JSON Web Token 사용
    maxAge: 60 * 60 * 24, // 세션 만료 시간(sec)
  },
  pages: {
    signIn: "/signin", // Default: '/auth/signin'
  },
  callbacks: {
    signIn: async () => {
      return true;
    },
    jwt: async ({ token }) => {
      return token;
    },
    session: async ({ session }) => {
      return session;
    },
  },
});
