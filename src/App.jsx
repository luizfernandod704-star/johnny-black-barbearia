import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import InstagramButton from "./components/InstagramButton/InstagramButton";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Map />
      <Footer />     
      <WhatsappButton />
      <InstagramButton />  
    </>
  );
}

export default App;