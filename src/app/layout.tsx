import type { Metadata } from "next";

import "./globals.css";

import MobileContainer from "./components/MobileContainer";
import { pretendard } from "./fonts";
import { Provider } from "./components/Provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/shared/auth";

export const metadata: Metadata = {
  title: "Fills Log",
  description: "This is Your first Fills-Log",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="kr">
      <body
        className={`${pretendard.variable} ${pretendard.variable} antialiased`}
      >
        <Provider session={session}>
          <MobileContainer>{children}</MobileContainer>
        </Provider>
      </body>
    </html>
  );
}
