import "./globals.css";
import SideBar from "./components/SideBar";
import MobileHeader from "./components/MobileHeader";

import { Poppins } from "next/font/google";

// Load the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased bg-custom-gradient`}
      >
        <div className="block md:flex h-screen md:pt-16">
          <SideBar />
          <div className="md:ml-1/4 w-full">
            <MobileHeader />
            <main className="flex flex-col h-full md:px-12">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
