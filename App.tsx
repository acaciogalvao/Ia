import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Navbar Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center">
              <span className="font-mono text-sm">AI</span>
            </div>
            Universo IA
          </div>
          <a 
            href="https://ai.google.dev" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-full hover:bg-white/5"
          >
            Powered by Gemini
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <InteractiveDemo />
      </main>

      <footer className="border-t border-white/10 bg-black py-12 relative overflow-hidden">
        {/* Decorative background gradients for footer */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Universo IA</h3>
              <p className="text-gray-500 text-sm">Explorando o infinito digital.</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Manifesto</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Tecnologia</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contato</a>
            </div>
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Design Futurista. TailwindCSS & React.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
