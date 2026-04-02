"use client";
import React, { useEffect, useState } from 'react';

interface LoreCardProps {
  eraReached: number;
  eraName: string;
  score: number;
  skillLevel: string;
}

export const LoreCard: React.FC<LoreCardProps> = ({ eraReached, eraName, score, skillLevel }) => {
  const [lore, setLore] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLore = async () => {
      try {
        const response = await fetch('/api/lore', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ eraReached, eraName, score, skillLevel })
        });
        const data = await response.json();
        if (data.lore) {
          setLore(data.lore);
        } else {
          setLore("Transmission corrupted. Lore unavailable.");
        }
      } catch (e) {
        setLore("Transmission failed. Network error.");
      } finally {
        setLoading(false);
      }
    };
    fetchLore();
  }, [eraReached, eraName, score, skillLevel]);

  return (
    <div className="w-full bg-[#121212] border border-amber-500/30 rounded-xl p-4 mt-4 shadow-[0_0_15px_rgba(245,158,11,0.15)] font-mono">
      <h4 className="text-amber-500 font-bold mb-2 flex items-center gap-2">
        <span className="animate-pulse">📡</span> Computing Lore
      </h4>
      <div className="text-amber-100/90 text-sm leading-relaxed min-h-[3rem]">
        {loading ? (
          <span className="animate-pulse">Transmitting...</span>
        ) : (
          lore
        )}
      </div>
    </div>
  );
};
