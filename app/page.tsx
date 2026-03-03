import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NeonGuide from "@/components/NeonGuide";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <NeonGuide />
        <Services />
        <Showcase />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}
