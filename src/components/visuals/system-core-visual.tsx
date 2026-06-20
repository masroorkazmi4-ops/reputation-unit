export function SystemCoreVisual() {
  return (
    <div 
      className="perspective-stage relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Background glow - increased opacity for better visibility */}
      <div className="orbital-glow opacity-80" />

      {/* Main Core Platform (orbit rings) */}
      <div 
        className="absolute w-3/4 h-3/4 border-2 border-white/10 rounded-full grid-bg opacity-40 shadow-[inset_0_0_40px_rgba(99,102,241,0.1)]" 
        style={{ transform: "rotateX(60deg) translateZ(-50px)" }}
      />
      
      <div 
        className="absolute w-full h-full border border-[var(--color-accent)] rounded-full border-dashed opacity-30"
        style={{ transform: "rotateX(60deg) translateZ(-80px)", animation: "orbital 30s linear infinite reverse" }}
      />

      {/* Central RU Node - Strengthened border and inner shadow */}
      <div 
        className="floating-panel absolute z-20 flex flex-col items-center justify-center surface-card"
        style={{ 
          width: "120px", 
          height: "120px", 
          borderRadius: "24px", 
          background: "var(--color-surface-elevated)", 
          border: "2px solid var(--color-accent)", 
          boxShadow: "0 0 40px var(--color-accent-glow), inset 0 0 20px rgba(99,102,241,0.2)" 
        }}
      >
        <div className="font-mono text-[11px] text-[var(--color-accent)] mb-1 tracking-widest font-semibold">SYSTEM</div>
        <div className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md">RU</div>
      </div>

      {/* Floating browser / system panels - Clearer panels */}
      <div 
        className="browser-frame floating-panel floating-panel-delay-1 absolute z-10 shadow-2xl"
        style={{ 
          width: "200px", 
          height: "130px", 
          top: "12%", 
          left: "2%", 
          transform: "translateZ(-20px)", 
          background: "var(--color-surface)",
          border: "1px solid var(--color-border-strong)",
        }}
      >
        <div className="browser-header border-b border-[var(--color-border-strong)]">
          <div className="browser-dot" /><div className="browser-dot" /><div className="browser-dot" />
        </div>
        <div className="p-3 flex flex-col gap-2.5">
          <div className="h-2.5 w-1/2 bg-[var(--color-accent)] rounded opacity-80" />
          <div className="h-10 w-full bg-[var(--color-bg-secondary)] rounded border border-[var(--color-border)]" />
          <div className="h-2 w-3/4 bg-[var(--color-border-strong)] rounded" />
        </div>
      </div>

      <div 
        className="browser-frame floating-panel floating-panel-delay-2 absolute z-30 shadow-2xl"
        style={{ 
          width: "160px", 
          height: "180px", 
          bottom: "8%", 
          right: "0%", 
          transform: "translateZ(40px)", 
          background: "var(--color-surface)",
          border: "1px solid var(--color-border-strong)",
        }}
      >
        <div className="browser-header border-b border-[var(--color-border-strong)]" style={{ height: "24px" }}>
          <div className="browser-dot" style={{ width: "6px", height: "6px" }} />
        </div>
        <div className="p-3 flex flex-col gap-3">
          <div className="flex gap-2.5">
            <div className="h-10 w-10 bg-[var(--color-accent)] rounded flex-shrink-0 opacity-20 border border-[var(--color-accent)]" />
            <div className="flex flex-col gap-1.5 w-full justify-center">
               <div className="h-2.5 w-full bg-[var(--color-border-strong)] rounded" />
               <div className="h-2 w-2/3 bg-[var(--color-border)] rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1">
             <div className="h-12 bg-[var(--color-bg-secondary)] rounded border border-[var(--color-border)]" />
             <div className="h-12 bg-[var(--color-bg-secondary)] rounded border border-[var(--color-border)]" />
          </div>
        </div>
      </div>

      {/* Data connection lines - More visible */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.6 }}>
        <path d="M 50% 50% L 15% 25%" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 50% 50% L 85% 85%" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="15%" cy="25%" r="3" fill="var(--color-accent)" />
        <circle cx="85%" cy="85%" r="3" fill="var(--color-accent)" />
      </svg>
    </div>
  );
}
