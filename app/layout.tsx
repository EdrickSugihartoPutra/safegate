import "./globals.css";
import { Inter, Rubik, Fira_Code } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const fira_code = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "SafeGate",
  description: "Be Aware Be Safe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira_code.className}>{children}</body>
    </html>
  );
}
