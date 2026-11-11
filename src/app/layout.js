import "./globals.css";
import { Inter } from "next/font/google";
import SiteShell from "@/components/layout/SiteShell";
import { companyName, siteUrl } from "@/lib/site";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | Digital Solutions & Software Development`,
    template: `%s | ${companyName}`,
  },
  description:
    "Pixelmindsolutions helps businesses build thoughtful digital products, modern applications and scalable software solutions.",
  openGraph: {
    type: "website",
    siteName: companyName,
    title: companyName,
    description: "Thoughtful technology. Meaningful digital experiences.",
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
