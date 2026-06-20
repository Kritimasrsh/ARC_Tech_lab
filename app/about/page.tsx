import React from 'react';
import Navbar from '@/components/Navbar';

export default function About() {
  const identity = [
    { 
      letter: 'A', 
      title: 'Annapurna', 
      desc: 'Representing the pinnacle of performance and the grandeur of our heritage.',
      img: 'a1.webp'
    },
    { 
      letter: 'R', 
      title: 'Ridge', 
      desc: 'Symbolizing the structural strength and the clear path we create for your business.',
      img: 'ridge.jpg'
    },
    { 
      letter: 'C', 
      title: 'Cho Oyu', 
      desc: 'Inspired by the mountain, reflecting our ambition to reach new heights in tech.',
      img: 'cho-oyu.jpg'
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-10 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="text-[#0E9A5E]">ARC</span> Tech Lab
        </h1>
        <p className="text-2xl md:text-3xl font-bold italic text-gray-800 mb-12">
          "We build, you grow."
        </p>
        
        <div className="max-w-4xl mx-auto text-left space-y-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Based in the heart of Nepal—a land defined by its soaring mountains and natural beauty—ARC Tech Lab draws its strength from the landscape we call home. Just as the mountains stand as monuments of resilience, our digital systems are engineered to be load-bearing, stable, and built to withstand the pressures of modern business.
          </p>

          <div className="border-l-4 border-[#0E9A5E] pl-8 py-2">
            <h2 className="text-2xl font-bold mb-4">The Meaning Behind the Arc</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              An arc is a curve that connects two points, and that is exactly what we do: 
              <strong> We connect People to Systems, and Systems to Solutions.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 px-10 bg-[#F4F2EE]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-10 text-center text-[#0E9A5E]">Our Identity</h2>
          <div className="grid md:grid-cols-3 gap-12 items-stretch">
            {identity.map((item) => (
              <div 
                key={item.letter} 
                className="p-8 rounded-3xl shadow-lg border border-gray-100 bg-cover bg-center bg-no-repeat flex flex-col justify-end min-h-[350px]"
                style={{ 
                  backgroundImage: `url('/${item.img}')` 
                }}
              >
                {/* Text is now white to be visible on the clear images */}
                <h3 className="text-5xl font-black text-white mb-3 drop-shadow-md">{item.letter}</h3>
                <p className="font-bold text-xl mb-2 text-white drop-shadow-md">{item.title}</p>
                <p className="text-sm text-white font-medium drop-shadow-md leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center text-gray-500">
        <p className="font-bold text-black mb-2">ARC TECH LAB</p>
        <p>© 2026 ARC Tech Lab. Built in Nepal for the World.</p>
      </footer>
    </main>
  );
}