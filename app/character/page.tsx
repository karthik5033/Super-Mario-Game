'use client'

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CHARACTERS, CharacterId } from '@/lib/gameConfig';
import { drawMario, drawBill, drawRobot, drawAda, drawLinus } from '@/components/game/CharacterRenderer';

export default function CharacterSelectPage() {
  const [selectedId, setSelectedId] = useState<CharacterId>('robot');
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('selectedCharacter');
    if (saved) setSelectedId(saved as CharacterId);
  }, []);

  const handleSelect = (id: CharacterId) => {
    setSelectedId(id);
    localStorage.setItem('selectedCharacter', id);
  };

  const handleStart = () => {
    router.push('/game');
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white font-mono p-8 flex flex-col items-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
          CHOOSE YOUR LEGEND
        </h1>
        <p className="text-gray-400 text-sm md:text-lg uppercase tracking-widest">
          Each hero shaped computing history
        </p>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl w-full mb-16">
        {CHARACTERS.map((char) => (
          <div 
            key={char.id}
            onClick={() => handleSelect(char.id)}
            className={`
              relative p-4 rounded-xl bg-gray-900 border-2 transition-all duration-300 cursor-pointer
              ${selectedId === char.id 
                ? `border-[${char.color}] ring-2 ring-[${char.color}] shadow-2xl scale-105 z-10` 
                : 'border-white/10 hover:border-white/30'}
            `}
            style={{ 
              borderColor: selectedId === char.id ? char.color : undefined,
              boxShadow: selectedId === char.id ? `0 0 20px ${char.color}44` : undefined
            }}
          >
            <div className="h-32 flex items-center justify-center mb-4 bg-black/40 rounded-lg overflow-hidden">
               <CharacterPreview characterId={char.id} color={char.color} />
            </div>
            
            <h3 className="text-xl font-bold mb-1 truncate">{char.name}</h3>
            <p className="text-[10px] text-gray-500 mb-4 h-8 transition-colors">
              {char.description}
            </p>

            <button 
              className={`
                w-full py-2 text-[10px] uppercase font-bold rounded flex items-center justify-center gap-2
                ${selectedId === char.id ? 'bg-white text-black' : 'bg-gray-800 text-gray-400'}
              `}
            >
              {selectedId === char.id ? 'SELECTED ✓' : 'SELECT'}
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={handleStart}
        className="group relative px-12 py-4 bg-white text-black font-black text-xl hover:scale-110 active:scale-95 transition-all"
      >
        <span className="relative z-10 flex items-center gap-3">
          START GAME →
        </span>
        <div className="absolute inset-0 bg-white blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
      </button>

      <style jsx>{`
        .grid::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

function CharacterPreview({ characterId, color }: { characterId: CharacterId, color: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Setup units based on a 36x40 player at 0.6 scale inside 80x100
    const w = 36;
    const h = 40;
    const u = w / 10;
    const v = h / 16;
    
    ctx.save();
    ctx.translate(canvas.width/2 - (w * 0.8)/2, canvas.height/2 - (h * 0.8)/2);
    ctx.scale(1.2, 1.2); // scaled up for preview visibility

    const stride = 1.5;
    const frames = 0;

    // Drawing methods translated to functional preview
    switch(characterId) {
      case 'mario':
        drawMario(ctx, w, h, frames, true);
        break;
      case 'bill':
        drawBill(ctx, w, h, frames, true);
        break;
      case 'robot':
        drawRobot(ctx, w, h, frames, true);
        break;
      case 'ada':
        drawAda(ctx, w, h, frames, true);
        break;
      case 'linus':
        drawLinus(ctx, w, h, frames, true);
        break;
    }
    
    ctx.restore();
  }, [characterId]);

  return <canvas ref={canvasRef} width={80} height={100} />;
}
