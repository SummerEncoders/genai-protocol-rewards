import Footer from "./footer";
import NavBar from "./nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-trust-background">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
