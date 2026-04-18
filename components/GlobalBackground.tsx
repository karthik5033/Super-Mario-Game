"use client";

import { usePathname } from "next/navigation";

export default function GlobalBackground() {
  const pathname = usePathname();

  // Background is now visible on all pages

  return (
    <div className="fixed inset-0 z-0 w-full pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover opacity-90"
      >
        <source src="/bg_loop_new.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}
