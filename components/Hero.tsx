import React from 'react';
import { ArrowRightIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel mb-8 border border-purple-500/30">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-purple-200">Gemini 3 Flash Preview Powered</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight">
          O Futuro é <br />
          <span className="gradient-text">Artificial</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore as fronteiras da inteligência de máquina. Onde algoritmos encontram a criatividade e dados se transformam em sonhos digitais.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all duration-300">
            <span className="relative z-10 flex items-center">
              Começar Jornada <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"></div>
          </button>
          
          <button className="px-8 py-4 rounded-full glass-panel border border-white/10 hover:bg-white/10 transition-all text-white font-medium">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
