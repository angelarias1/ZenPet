import Navbar from './components/Navbar'; // 👈 Asegúrate de importar esto
import About from './components/About';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Cta from './components/CTA';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Promotions from './components/Promotions';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <>
      <Navbar /> {/* 👈 Menú fijo arriba */}
      <Hero />
      <About />   
      <Services />
      <Promotions />
      <Gallery />
      <Testimonials />
      <Cta />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
