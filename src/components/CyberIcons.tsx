/**
 * Cybernetic SVG icons replacing emojis — glowing technical schematics
 */

export const CyberPython = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <path d="M16 2C10.5 2 8 4.5 8 7v3h8v1H7c-3 0-5 2.5-5 6s2 6 5 6h2v-3c0-3 2.5-5.5 5.5-5.5H22c2.5 0 4.5-2 4.5-4.5V7c0-2.5-3-5-10.5-5z" stroke="hsl(var(--neon-blue))" strokeWidth="1.2" opacity="0.9"/>
    <path d="M16 30c5.5 0 8-2.5 8-5v-3h-8v-1h9c3 0 5-2.5 5-6s-2-6-5-6h-2v3c0 3-2.5 5.5-5.5 5.5H10c-2.5 0-4.5 2-4.5 4.5V25c0 2.5 3 5 10.5 5z" stroke="hsl(var(--neon-purple))" strokeWidth="1.2" opacity="0.9"/>
    <circle cx="12" cy="7" r="1.5" fill="hsl(var(--neon-blue))" opacity="0.8"/>
    <circle cx="20" cy="25" r="1.5" fill="hsl(var(--neon-purple))" opacity="0.8"/>
  </svg>
);

export const CyberChart = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <rect x="3" y="3" width="26" height="26" rx="2" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.3"/>
    <polyline points="5,24 10,18 14,20 20,10 27,14" stroke="hsl(var(--neon-blue))" strokeWidth="1.5" opacity="0.9"/>
    <polyline points="5,22 12,15 17,19 24,8 27,11" stroke="hsl(var(--neon-purple))" strokeWidth="1" opacity="0.5"/>
    <circle cx="10" cy="18" r="1.5" fill="hsl(var(--neon-blue))" opacity="0.8"/>
    <circle cx="20" cy="10" r="1.5" fill="hsl(var(--neon-blue))" opacity="0.8"/>
    <circle cx="14" cy="20" r="1.5" fill="hsl(var(--neon-purple))" opacity="0.6"/>
  </svg>
);

export const CyberDatabase = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <ellipse cx="16" cy="8" rx="10" ry="4" stroke="hsl(var(--neon-blue))" strokeWidth="1.2" opacity="0.8"/>
    <path d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="hsl(var(--neon-blue))" strokeWidth="1.2" opacity="0.6"/>
    <ellipse cx="16" cy="16" rx="10" ry="4" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.4"/>
    <line x1="16" y1="12" x2="16" y2="28" stroke="hsl(var(--neon-purple))" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2"/>
  </svg>
);

export const CyberBolt = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <polygon points="18,2 8,18 15,18 14,30 24,14 17,14" stroke="hsl(var(--neon-blue))" strokeWidth="1.2" fill="hsl(var(--neon-blue) / 0.1)"/>
    <line x1="16" y1="6" x2="16" y2="12" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.5"/>
    <circle cx="16" cy="16" r="8" stroke="hsl(var(--neon-purple))" strokeWidth="0.5" opacity="0.2" strokeDasharray="3 3"/>
  </svg>
);

export const CyberTensor = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <rect x="6" y="6" width="8" height="8" rx="1" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.7"/>
    <rect x="18" y="6" width="8" height="8" rx="1" stroke="hsl(var(--neon-purple))" strokeWidth="1" opacity="0.7"/>
    <rect x="6" y="18" width="8" height="8" rx="1" stroke="hsl(var(--neon-purple))" strokeWidth="1" opacity="0.7"/>
    <rect x="18" y="18" width="8" height="8" rx="1" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.7"/>
    <line x1="14" y1="10" x2="18" y2="10" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.5"/>
    <line x1="10" y1="14" x2="10" y2="18" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.5"/>
    <line x1="22" y1="14" x2="22" y2="18" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.5"/>
    <line x1="14" y1="22" x2="18" y2="22" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.5"/>
  </svg>
);

export const CyberFlame = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <path d="M16 4c0 6-8 10-8 18 0 4.4 3.6 8 8 8s8-3.6 8-8c0-8-8-12-8-18z" stroke="hsl(var(--neon-blue))" strokeWidth="1.2" fill="hsl(var(--neon-blue) / 0.05)"/>
    <path d="M16 14c0 3-4 5-4 9 0 2.2 1.8 4 4 4s4-1.8 4-4c0-4-4-6-4-9z" stroke="hsl(var(--neon-purple))" strokeWidth="1" fill="hsl(var(--neon-purple) / 0.1)"/>
  </svg>
);

export const CyberGear = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <circle cx="16" cy="16" r="5" stroke="hsl(var(--neon-blue))" strokeWidth="1.2" opacity="0.8"/>
    <circle cx="16" cy="16" r="10" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 4"/>
    <line x1="16" y1="2" x2="16" y2="8" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.6"/>
    <line x1="16" y1="24" x2="16" y2="30" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.6"/>
    <line x1="2" y1="16" x2="8" y2="16" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.6"/>
    <line x1="24" y1="16" x2="30" y2="16" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.6"/>
    <circle cx="16" cy="16" r="2" fill="hsl(var(--neon-purple))" opacity="0.5"/>
  </svg>
);

export const CyberPanda = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <rect x="4" y="8" width="24" height="16" rx="3" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.6"/>
    <line x1="4" y1="12" x2="28" y2="12" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.4"/>
    <line x1="4" y1="16" x2="28" y2="16" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.3"/>
    <line x1="4" y1="20" x2="28" y2="20" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.4"/>
    <line x1="12" y1="8" x2="12" y2="24" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.3"/>
    <line x1="20" y1="8" x2="20" y2="24" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.3"/>
    <circle cx="8" cy="14" r="1" fill="hsl(var(--neon-blue))" opacity="0.7"/>
    <circle cx="16" cy="18" r="1" fill="hsl(var(--neon-purple))" opacity="0.7"/>
  </svg>
);

export const CyberRobot = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <rect x="8" y="10" width="16" height="14" rx="2" stroke="hsl(var(--neon-blue))" strokeWidth="1.2" opacity="0.8"/>
    <circle cx="12" cy="17" r="2" stroke="hsl(var(--neon-purple))" strokeWidth="1" fill="hsl(var(--neon-purple) / 0.2)"/>
    <circle cx="20" cy="17" r="2" stroke="hsl(var(--neon-blue))" strokeWidth="1" fill="hsl(var(--neon-blue) / 0.2)"/>
    <line x1="16" y1="6" x2="16" y2="10" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.6"/>
    <circle cx="16" cy="5" r="1.5" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.5"/>
    <line x1="4" y1="16" x2="8" y2="16" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.5"/>
    <line x1="24" y1="16" x2="28" y2="16" stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.5"/>
    <line x1="13" y1="22" x2="19" y2="22" stroke="hsl(var(--neon-purple))" strokeWidth="1" opacity="0.5"/>
  </svg>
);

export const CyberDNA = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <path d="M10 4c0 6 12 6 12 12s-12 6-12 12" stroke="hsl(var(--neon-blue))" strokeWidth="1.2" opacity="0.8"/>
    <path d="M22 4c0 6-12 6-12 12s12 6 12 12" stroke="hsl(var(--neon-purple))" strokeWidth="1.2" opacity="0.8"/>
    <line x1="12" y1="8" x2="20" y2="8" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.4"/>
    <line x1="10" y1="16" x2="22" y2="16" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.4"/>
    <line x1="12" y1="24" x2="20" y2="24" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.4"/>
  </svg>
);

export const CyberLineChart = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <polyline points="4,26 10,16 16,20 22,8 28,12" stroke="hsl(var(--neon-blue))" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
    <line x1="4" y1="28" x2="28" y2="28" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.3"/>
    <line x1="4" y1="4" x2="4" y2="28" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.3"/>
    <circle cx="22" cy="8" r="2" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" fill="hsl(var(--neon-purple) / 0.2)"/>
    <path d="M4 26 L10 16 L16 20 L22 8 L28 12 L28 28 L4 28Z" fill="hsl(var(--neon-blue) / 0.05)"/>
  </svg>
);

export const CyberChat = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`cyber-icon ${className}`} fill="none">
    <path d="M4 6h24v16H12l-6 4v-4H4V6z" stroke="hsl(var(--neon-blue))" strokeWidth="1.2" fill="hsl(var(--neon-blue) / 0.03)"/>
    <line x1="9" y1="12" x2="23" y2="12" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.5"/>
    <line x1="9" y1="16" x2="18" y2="16" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.4"/>
    <circle cx="24" cy="8" r="3" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" fill="hsl(var(--neon-purple) / 0.15)"/>
  </svg>
);

// Holographic brain for About section
export const HolographicBrain = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Radar ring */}
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]">
      <circle cx="100" cy="100" r="90" stroke="hsl(var(--neon-blue))" strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="8 8"/>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--neon-purple))" strokeWidth="0.3" fill="none" opacity="0.15" strokeDasharray="4 12"/>
      {/* Radar sweep */}
      <line x1="100" y1="100" x2="100" y2="10" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.4"/>
      <circle cx="100" cy="15" r="2" fill="hsl(var(--neon-blue))" opacity="0.6"/>
    </svg>

    {/* Outer ring */}
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite_reverse]">
      <circle cx="100" cy="100" r="95" stroke="hsl(var(--neon-purple))" strokeWidth="0.3" fill="none" opacity="0.15" strokeDasharray="2 6"/>
    </svg>

    {/* Brain schematic */}
    <svg viewBox="0 0 200 200" className="relative w-full h-full" fill="none">
      {/* Brain outline */}
      <path d="M100 40c-25 0-45 15-50 35-3 12 0 25 8 35-5 8-8 18-5 28 5 15 20 25 35 27h24c15-2 30-12 35-27 3-10 0-20-5-28 8-10 11-23 8-35-5-20-25-35-50-35z"
        stroke="hsl(var(--neon-blue))" strokeWidth="1" opacity="0.6"/>

      {/* Neural pathways */}
      <path d="M80 60c10 5 30 5 40 0" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.4"/>
      <path d="M70 80c15 8 45 8 60 0" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.5"/>
      <path d="M75 100c12 6 38 6 50 0" stroke="hsl(var(--neon-purple))" strokeWidth="0.8" opacity="0.3"/>
      <path d="M85 120c8 4 22 4 30 0" stroke="hsl(var(--neon-blue))" strokeWidth="0.8" opacity="0.4"/>

      {/* Center divide */}
      <line x1="100" y1="42" x2="100" y2="155" stroke="hsl(var(--neon-purple))" strokeWidth="0.5" opacity="0.25" strokeDasharray="3 5"/>

      {/* Data nodes - pulsing */}
      <circle cx="80" cy="60" r="3" fill="hsl(var(--neon-blue))" opacity="0.7">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="120" cy="60" r="3" fill="hsl(var(--neon-purple))" opacity="0.7">
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="70" cy="85" r="2.5" fill="hsl(var(--neon-blue))" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="130" cy="85" r="2.5" fill="hsl(var(--neon-purple))" opacity="0.6">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="75" r="4" fill="hsl(var(--neon-blue))" opacity="0.5">
        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="85" cy="105" r="2" fill="hsl(var(--neon-blue))" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="115" cy="105" r="2" fill="hsl(var(--neon-purple))" opacity="0.5">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="130" r="2.5" fill="hsl(var(--neon-blue))" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite"/>
      </circle>

      {/* Connection lines between nodes */}
      <line x1="80" y1="60" x2="100" y2="75" stroke="hsl(var(--neon-blue))" strokeWidth="0.5" opacity="0.3"/>
      <line x1="120" y1="60" x2="100" y2="75" stroke="hsl(var(--neon-purple))" strokeWidth="0.5" opacity="0.3"/>
      <line x1="70" y1="85" x2="85" y2="105" stroke="hsl(var(--neon-blue))" strokeWidth="0.5" opacity="0.2"/>
      <line x1="130" y1="85" x2="115" y2="105" stroke="hsl(var(--neon-purple))" strokeWidth="0.5" opacity="0.2"/>
      <line x1="85" y1="105" x2="100" y2="130" stroke="hsl(var(--neon-blue))" strokeWidth="0.5" opacity="0.2"/>
      <line x1="115" y1="105" x2="100" y2="130" stroke="hsl(var(--neon-purple))" strokeWidth="0.5" opacity="0.2"/>
    </svg>
  </div>
);
