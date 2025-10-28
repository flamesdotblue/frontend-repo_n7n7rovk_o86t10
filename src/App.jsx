import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import NameGeneratorDemo from './components/NameGeneratorDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero with Spline background */}
      <Hero />

      {/* Features */}
      <FeatureGrid />

      {/* Interactive demo */}
      <NameGeneratorDemo />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
