import Header from './sections/Header';
import Hero from './sections/Hero';
import Welcome from './sections/Welcome';
import Solutions from './sections/Solutions';
import Sustainability from './sections/Sustainability';
import Products from './sections/Products';
import News from './sections/News';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Solutions />
        <Sustainability />
        <Products />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
