"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MenuScreen() {
  const router = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex flex-col w-full bg-transparent text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* 2. Mouse Glow Spotlight (Interactive) */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 mix-blend-screen"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <main className="relative z-20 w-full max-w-5xl mx-auto px-6 pt-32 pb-32 flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <div 
          className="animate-fade-in-up opacity-0 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          IEEE Computer Society (1946–2026)
        </div>

        {/* Hero Title */}
        <h1 
          className="animate-fade-in-up opacity-0 text-6xl sm:text-7xl md:text-[6rem] font-black tracking-tighter leading-none"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
            Bit Odyssey.
          </span>
        </h1>
        
        {/* Hero Subtitle */}
        <p 
          className="animate-fade-in-up opacity-0 mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-300 font-light"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          A high-speed journey through the history of computer science. 
          Evade obstacles, collect data bits, and traverse from Vacuum Tubes to the Modern AI Era.
        </p>

        {/* Call to Action Buttons */}
        <div 
          className="animate-fade-in-up opacity-0 mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          <button 
            onClick={() => router.push("/character")}
            className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center overflow-hidden rounded-xl bg-white px-8 font-bold text-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full"></div>
            <span className="mr-2 text-lg">Start Game</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          <button 
            onClick={() => router.push("/leaderboard")}
            className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-xl border border-white/20 bg-black/40 px-8 font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40"
          >
            View Leaderboard
          </button>
        </div>

        {/* Feature Cards Grid (Fixed layout and sizing) */}
        <div 
          className="animate-fade-in-up opacity-0 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <div className="group relative rounded-2xl border border-white/10 bg-black/40 p-6 lg:p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 shadow-xl overflow-visible flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="relative z-10 h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-5 border border-blue-500/30 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="relative z-10 text-xl font-semibold text-white mb-3">High-Speed Action</h3>
            <p className="relative z-10 text-sm text-gray-300 leading-relaxed">Navigate dynamically generated obstacles while the game speed progressively increases. Survive as long as you can.</p>
          </div>

          <div className="group relative rounded-2xl border border-white/10 bg-black/40 p-6 lg:p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 shadow-xl overflow-visible flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="relative z-10 h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-5 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="relative z-10 text-xl font-semibold text-white mb-3">Dual Mechanics</h3>
            <p className="relative z-10 text-sm text-gray-300 leading-relaxed">Choose between classic Auto-Runner mode or switch to Manual Mode for complete control over your character's movement.</p>
          </div>

          <div className="group relative rounded-2xl border border-white/10 bg-black/40 p-6 lg:p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 shadow-xl overflow-visible flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="relative z-10 h-12 w-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-5 border border-yellow-500/30 text-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.3)] shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="relative z-10 text-xl font-semibold text-white mb-3">Power-Ups & Perks</h3>
            <p className="relative z-10 text-sm text-gray-300 leading-relaxed">Collect data bits for points, equip sky shields for invincibility, and grab multipliers to climb the global leaderboard.</p>
          </div>
        </div>
      </main>

      {/* ================= MORE CONTENT (SCROLL DOWN) ================= */}
      
      {/* Characters Section */}
      <section className="relative z-30 w-full border-t border-white/10 bg-black/30 py-24 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Choose Your Hero</h2>
            <p className="text-gray-400 text-lg">Play as legendary figures from the history of computer science.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
             {[
               { id: 'mario', name: 'Mario', desc: 'The Platformer King', icon: '🍄' },
               { id: 'ada', name: 'Ada', desc: 'First Programmer', icon: '📝' },
               { id: 'linus', name: 'Linus', desc: 'The Kernel Master', icon: '🐧' },
               { id: 'bill', name: 'Bill', desc: 'The OS Pioneer', icon: '🪟' },
               { id: 'robot', name: 'IEEE Bot', desc: 'Future Automaton', icon: '🤖' }
             ].map((char) => (
                <div key={char.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 group cursor-pointer shadow-lg">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white/10 to-transparent rounded-full mb-4 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                     {char.icon}
                  </div>
                  <h4 className="font-bold text-lg text-white">{char.name}</h4>
                  <p className="text-xs text-gray-400 mt-2 font-medium leading-relaxed">{char.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Eras Section */}
      <section className="relative z-30 w-full py-24 bg-black/40 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Five Eras of Computing</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Start your journey in the 1940s amidst massive Vacuum Tubes. As your score increases, seamlessly transition through the Transistor era, Microprocessors, the dawn of the Internet, and finally the Modern AI Era.
              </p>
              <ul className="space-y-4">
                 <li className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">1</span> 
                    <span className="text-white font-medium">1946: Vacuum Tubes</span>
                 </li>
                 <li className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">2</span> 
                    <span className="text-white font-medium">1960: Transistors</span>
                 </li>
                 <li className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="w-10 h-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center font-bold">3</span> 
                    <span className="text-white font-medium">1980: Microprocessors</span>
                 </li>
                 <li className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">4</span> 
                    <span className="text-white font-medium">2000: The Internet</span>
                 </li>
                 <li className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">5</span> 
                    <span className="text-white font-medium">2026: AI & Quantum</span>
                 </li>
              </ul>
            </div>
            <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[500px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-8 relative overflow-hidden flex flex-col items-center justify-center group shadow-2xl">
               {/* Background Glow */}
               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
               
               {/* Animated Core Graphic */}
               <div className="relative w-64 h-64 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-1000 ease-out">
                  {/* Outer Orbiting Ring */}
                  <div className="absolute w-full h-full border border-white/5 rounded-full animate-[spin_20s_linear_infinite] border-t-purple-500/50 border-r-blue-500/30 border-l-transparent border-b-transparent shadow-[0_0_30px_rgba(168,85,247,0.15)]"></div>
                  
                  {/* Dashed Inner Ring */}
                  <div className="absolute w-48 h-48 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed border-t-blue-400/50 border-b-purple-400/50"></div>

                  {/* High-speed inner track */}
                  <div className="absolute w-32 h-32 border-[3px] border-transparent rounded-full animate-[spin_3s_linear_infinite] border-t-blue-500 border-l-purple-500 opacity-80 mix-blend-screen blur-[1px]"></div>

                  {/* Pulsing Core Orb */}
                  <div className="absolute w-16 h-16 bg-gradient-to-tr from-purple-500 to-blue-400 rounded-full animate-pulse-slow shadow-[0_0_50px_rgba(139,92,246,0.8)] border border-white/40 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/90 rounded-full blur-[4px]"></div>
                  </div>
                  
                  {/* Crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                  </div>
               </div>

               {/* Scanning Line overlay */}
               <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-[fade-in-down_4s_ease-in-out_infinite] opacity-50"></div>

               <div className="relative z-10 mt-10 text-center flex flex-col items-center gap-2">
                  <div className="text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    Quantum Era Active
                  </div>
                  <div className="text-gray-400 font-mono text-xs tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    System Evolution
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-30 w-full py-10 border-t border-white/10 bg-black/60 text-center backdrop-blur-xl">
        <p className="text-sm text-gray-500 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} IEEE Computer Society. Built for the Prompthathon.
        </p>
      </footer>
    </div>
  );
}
