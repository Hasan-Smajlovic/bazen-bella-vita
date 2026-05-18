import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Offers />
      <Gallery />
      <Reservation />
      <Location />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
