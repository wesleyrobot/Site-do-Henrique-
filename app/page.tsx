import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Artists from "@/components/Artists";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Artists />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
