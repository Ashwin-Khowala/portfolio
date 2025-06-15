"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <LoadingProvider> */}
          <div className="h-[5vh] md:h-[10vh]">
            <NavBar />
          </div>
          <div className="md:h-[90vh]">
            {children}
          </div>
        {/* </LoadingProvider> */}
      </body>
    </html >
  );
}