import React from 'react';
import { CpuIcon, SparklesIcon, BrainIcon } from './Icons';

const features = [
  {
    title: "Aprendizado Profundo",
    description: "Redes neurais que imitam o cérebro humano para resolver problemas complexos com precisão inigualável.",
    icon: <BrainIcon className="w-8 h-8 text-white" />,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Processamento Natural",
    description: "Compreensão e geração de linguagem humana em tempo real, quebrando barreiras de comunicação globais.",
    icon: <SparklesIcon className="w-8 h-8 text-white" />,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "Visão Computacional",
    description: "A capacidade das máquinas de 'ver' e interpretar o mundo visual, desde diagnósticos médicos até carros autônomos.",
    icon: <CpuIcon className="w-8 h-8 text-white" />,
    gradient: "from-blue-500 to-cyan-500"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pilares da Inovação</h2>
          <p className="text-gray-400">As tecnologias que estão moldando o amanhã.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-50 blur group-hover:opacity-100 transition duration-500`}></div>
              <div className="relative bg-[#0a0a12] p-8 rounded-2xl h-full flex flex-col items-start border border-white/5">
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
