import Hero from './components/Hero';
import DataBridge from './components/DataBridge';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a1628] overflow-x-hidden">
      <Hero />
      <DataBridge />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
