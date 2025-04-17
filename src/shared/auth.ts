import KakaoProvider from "next-auth/providers/kakao";
import { SupabaseAdapter } from "@auth/supabase-adapter";
// lib/auth.ts
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.NEXT_PUBLIC_SUPABASE_SECRET!,
  }),
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
  },

  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
};
