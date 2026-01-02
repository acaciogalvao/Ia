import React, { useState } from 'react';
import { generateAiExplanation } from '../services/geminiService';
import { SparklesIcon, BrainIcon } from './Icons';

const InteractiveDemo: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsLoading(true);
    setResult('');
    
    const text = await generateAiExplanation(topic);
    
    setResult(text);
    setIsLoading(false);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-1 border border-white/10 overflow-hidden shadow-2xl shadow-purple-900/20">
          <div className="bg-[#0f0f16] p-8 md:p-12 rounded-[20px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                <BrainIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Pergunte ao Oráculo Digital</h2>
            </div>
            
            <p className="text-gray-400 mb-8">
              Digite qualquer conceito tecnológico e veja a IA explicá-lo com uma perspectiva futurista.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ex: Redes Neurais, Computação Quântica, Metaverso..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <button
                onClick={handleGenerate}
                disabled={isLoading || !topic}
                className={`px-8 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  isLoading || !topic
                    ? 'bg-gray-800 cursor-not-allowed text-gray-500' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02]'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Pensando...
                  </>
                ) : (
                  <>
                    <SparklesIcon className="w-5 h-5" />
                    Gerar
                  </>
                )}
              </button>
            </div>

            <div className={`transition-all duration-500 overflow-hidden ${result ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 relative group">
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <h3 className="text-sm font-mono text-purple-400 mb-3 uppercase tracking-widest">Resposta da IA</h3>
                 <p className="text-gray-200 leading-relaxed font-light text-lg whitespace-pre-wrap relative z-10">
                   {result}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
