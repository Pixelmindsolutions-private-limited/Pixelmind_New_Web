import Header from "@/components/navigation/Header";
import Footer from "./Footer";
export default function SiteShell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
