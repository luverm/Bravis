import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import StoryLine from "@/components/StoryLine";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        <StoryLine />
        <FloatingIcons />
        <div className="relative z-[3]">{children}</div>
      </main>
      <Footer />
    </>
  );
}
