import "../styles/global.css"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../../components/navigation";
// import AboutUs from "./about-us/page";
// import AboutUsLayout from "./about-us/layout";
// import Sales from "./about-us/company/jobs/sales/page";
// import SalesLayout from "./about-us/company/jobs/sales/layout";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Next English man",
    default: "Next English man",
  },
  description: "Im a English man and homepage man",
};

export default function Layout({children}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {/*
          <AboutUsLayout>
            <SalesLayout>
              <Sales/>
            </SalesLayout>
          </AboutUsLayout> 
        */}
        {children}
      </body>
    </html>
  );
}