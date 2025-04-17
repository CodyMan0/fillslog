// app/api/auth/[...nextauth]/route.ts
import { authOptions } from "@/shared/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
console.log("handler", handler);
export { handler as GET, handler as POST };
