// css
import "./globals.css";

// components
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";

// context
import MainContext from "@/context/MainContext";

export const metadata = {
  title: "ORO Shoes",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="relative max-w-480 min-h-full mx-auto flex flex-col duration-300">
        <MainContext>
          <Navbar />
          <MobileMenu />
          {children}
        </MainContext>
      </body>
    </html>
  );
}
