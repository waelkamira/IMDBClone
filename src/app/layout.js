import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is my IMDB Clone App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
