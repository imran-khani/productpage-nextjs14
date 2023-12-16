import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js + Tailwind CSS",
  description: "Next.js + Tailwind CSS",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="scroll-smooth">
      <body>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <main className="flex-1 p-4 md:px-8 md:py-16">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
