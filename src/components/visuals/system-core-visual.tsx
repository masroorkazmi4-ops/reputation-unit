export function SystemCoreVisual() {
  return (
    <div 
      className="perspective-stage relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Background glow */}
      <div className="orbital-glow" />

      {/* Main Core Platform (orbit ring) */}
      <div 
        className="absolute w-3/4 h-3/4 border border-white/5 rounded-full grid-bg opacity-30" 
        style={{ transform: "rotateX(60deg) translateZ(-50px)" }}
      />
      
      <div 
        className="absolute w-full h-full border border-[var(--color-border)] rounded-full border-dashed opacity-20"
        style={{ transform: "rotateX(60deg) translateZ(-80px)", animation: "orbital 30s linear infinite reverse" }}
      />

      {/* Central RU Node */}
      <div 
        className="floating-panel absolute z-20 flex flex-col items-center justify-center surface-card"
        style={{ 
          width: "110px", 
          height: "110px", 
          borderRadius: "24px", 
          background: "var(--color-bg)", 
          border: "1px solid var(--color-accent)", 
          boxShadow: "0 0 30px var(--color-accent-glow)" 
        }}
      >
        <div className="font-mono text-[10px] text-[var(--color-accent)] mb-1 tracking-widest">SYSTEM</div>
        <div className="text-3xl font-bold tracking-tight">RU</div>
      </div>

      {/* Floating browser / system panels */}
      <div 
        className="browser-frame floating-panel floating-panel-delay-1 absolute z-10"
        style={{ 
          width: "180px", 
          height: "120px", 
          top: "15%", 
          left: "5%", 
          transform: "translateZ(-20px)", 
          opacity: 0.9, 
          background: "var(--color-surface)" 
        }}
      >
        <div className="browser-header">
          <div className="browser-dot" /><div className="browser-dot" /><div className="browser-dot" />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <div className="h-2 w-1/2 bg-[var(--color-border-strong)] rounded" />
          <div className="h-10 w-full bg-[var(--color-border)] rounded" />
        </div>
      </div>

      <div 
        className="browser-frame floating-panel floating-panel-delay-2 absolute z-30"
        style={{ 
          width: "150px", 
          height: "170px", 
          bottom: "10%", 
          right: "2%", 
          transform: "translateZ(30px)", 
          opacity: 0.95, 
          background: "var(--color-surface)" 
        }}
      >
        <div className="browser-header" style={{ height: "20px" }}>
          <div className="browser-dot" style={{ width: "6px", height: "6px" }} />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="h-8 w-8 bg-[var(--color-border-strong)] rounded flex-shrink-0" />
            <div className="h-8 w-full bg-[var(--color-border)] rounded" />
          </div>
          <div className="h-2 w-full bg-[var(--color-border)] rounded mt-2" />
          <div className="h-2 w-2/3 bg-[var(--color-border)] rounded" />
        </div>
      </div>

      {/* Data connection lines (pure CSS / SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.4 }}>
        <path d="M 50% 50% L 20% 25%" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 50% 50% L 80% 80%" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}
