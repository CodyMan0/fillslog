import type { Metadata } from "next";

import "./globals.css";

import MobileContainer from "./components/MobileContainer";
import { pretendard } from "./fonts";
import { Provider } from "./components/Provider";

export const metadata: Metadata = {
  title: "Fills Log",
  description: "This is Your first Fills-Log",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={`${pretendard.variable} ${pretendard.variable} antialiased`}
      >
        <Provider session={null}>
          <MobileContainer>{children}</MobileContainer>
        </Provider>
      </body>
    </html>
  );
}
