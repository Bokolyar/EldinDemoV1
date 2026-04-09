import Header from './sections/Header';
import Hero from './sections/Hero';
import Categories from './sections/Categories';
import Advantages from './sections/Advantages';
import About from './sections/About';
import FeaturedProducts from './sections/FeaturedProducts';
import Services from './sections/Services';
import News from './sections/News';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Advantages />
        <About />
        <FeaturedProducts />
        <Services />
        <News />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
