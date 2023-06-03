import "./globals.css";
import { Inter, Lato } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
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
      <body className={lato.className}>{children}</body>
    </html>
  );
}
