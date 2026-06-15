import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;