import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Bazen Bella Vita Gračanica – Privatni bazen i apartmani`}
        description={`Iznajmljivanje privatnog bazena i apartmana u Gračanici. Kristalno čista voda, ležaljke, pool bar i parking. Rezervišite svoj termin.`}
        url={`https://www.bazenbellavita.ba/`}
        image={`https://www.bazenbellavita.ba/assets/logo-transparent.webp`}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offers />
        <Gallery />
        <Reservation />
        <Location />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
