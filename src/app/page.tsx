import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoveStory from "./components/LoveStory";
import Registry from "./components/Registry";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LoveStory />
        <Registry />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
