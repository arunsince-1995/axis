import React from "react";

// AXIZ Logo — stylized "A" + wordmark, monochrome by default.
// Sizes inherit from font-size on parent.
const AxizLogo = ({ className = "", showTagline = true, accent = "#F05A26" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="axiz-logo">
      {/* Mark */}
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M4 44 L24 4 L44 44 H34 L24 22 L18 34 H30 L34 44 Z" fill="currentColor" />
        <path d="M10 36 L18 36 L14 44 Z" fill={accent} />
      </svg>
      <div className="leading-none">
        <div
          className="font-display text-2xl md:text-[1.7rem] font-black uppercase tracking-tight"
          style={{ letterSpacing: "0.04em" }}
        >
          AXIZ
        </div>
        {showTagline && (
          <div className="text-[10px] tracking-[0.45em] uppercase text-[#A1A1AA] mt-0.5">
            Production
          </div>
        )}
      </div>
    </div>
  );
};

export default AxizLogo;
