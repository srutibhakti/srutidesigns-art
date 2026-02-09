export default function Home() {
  return (
    <main className="page">
      {/* Background layers */}
      <div className="bg" aria-hidden="true">
        <div className="bgGlow g1" />
        <div className="bgGlow g2" />
        <div className="bgGlow g3" />

        {/* Floating bubbles */}
        <span className="bubble b1" />
        <span className="bubble b2" />
        <span className="bubble b3" />
        <span className="bubble b4" />
        <span className="bubble b5" />
        <span className="bubble b6" />
      </div>

      {/* Content */}
      <section className="hero">
        <div className="logoWrap">
          {/* Graffiti-style SVG logo (editable text) */}
          <svg
            className="logo"
            viewBox="0 0 1200 520"
            role="img"
            aria-label="Sruti's Designs"
          >
            <defs>
              <linearGradient id="fillGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(255, 182, 193, 1)" />
                <stop offset="45%" stopColor="rgba(203, 166, 247, 1)" />
                <stop offset="100%" stopColor="rgba(137, 180, 250, 1)" />
              </linearGradient>

              <linearGradient id="shineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
                <stop offset="55%" stopColor="rgba(255,255,255,0.12)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feColorMatrix
                  result="pink"
                  type="matrix"
                  values="
                    1 0 0 0 0
                    0 0.85 0 0 0
                    0 1 1 0 0
                    0 0 0 1 0"
                />
                <feMerge>
                  <feMergeNode in="pink" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Back “spray” shadow */}
            <text
              x="50%"
              y="46%"
              textAnchor="middle"
              className="logoText shadow"
            >
              Sruti’s
            </text>
            <text
              x="50%"
              y="70%"
              textAnchor="middle"
              className="logoText shadow"
            >
              Designs
            </text>

            {/* Thick outline */}
            <text x="50%" y="46%" textAnchor="middle" className="logoText outline">
              Sruti’s
            </text>
            <text x="50%" y="70%" textAnchor="middle" className="logoText outline">
              Designs
            </text>

            {/* Gradient fill */}
            <text x="50%" y="46%" textAnchor="middle" className="logoText fill">
              Sruti’s
            </text>
            <text x="50%" y="70%" textAnchor="middle" className="logoText fill">
              Designs
            </text>

            {/* Shine overlay */}
            <text x="50%" y="46%" textAnchor="middle" className="logoText shine">
              Sruti’s
            </text>
            <text x="50%" y="70%" textAnchor="middle" className="logoText shine">
              Designs
            </text>
          </svg>
        </div>

        <div className="taglines">
          <div className="tag1">Design that shapes spaces.</div>
          <div className="tag2">Immersive visual experiences in murals.</div>
        </div>
      </section>

      <style jsx global>{`
        /* OPTIONAL: When you upload a graffiti font later, drop it in:
           /public/fonts/SrutiGraffiti.woff2
           and it will automatically apply.
        */
        @font-face {
          font-family: "SrutiGraffiti";
          src: url("/fonts/SrutiGraffiti.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <style jsx>{`
        .page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, #070713 0%, #0b0b18 45%, #0e0e24 100%);
          color: rgba(255, 255, 255, 0.92);
        }

        .bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* dreamy cloud glows */
        .bgGlow {
          position: absolute;
          width: 68vmax;
          height: 68vmax;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.35;
          mix-blend-mode: screen;
          animation: drift 18s ease-in-out infinite;
        }
        .g1 {
          left: -18vmax;
          top: -18vmax;
          background: radial-gradient(circle at 30% 30%, rgba(255, 182, 193, 0.9), transparent 55%);
        }
        .g2 {
          right: -22vmax;
          top: 10vmax;
          background: radial-gradient(circle at 40% 40%, rgba(137, 180, 250, 0.9), transparent 55%);
          animation-duration: 22s;
        }
        .g3 {
          left: 10vmax;
          bottom: -24vmax;
          background: radial-gradient(circle at 40% 40%, rgba(203, 166, 247, 0.9), transparent 55%);
          animation-duration: 26s;
        }

        @keyframes drift {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -18px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        /* bubbles */
        .bubble {
          position: absolute;
          border-radius: 999px;
          width: 22vmin;
          height: 22vmin;
          opacity: 0.16;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.30), rgba(255,255,255,0.05) 55%, transparent 70%);
          box-shadow: 0 0 45px rgba(255, 182, 193, 0.15), 0 0 65px rgba(137, 180, 250, 0.12);
          animation: floatUp 14s ease-in-out infinite;
        }
        .b1 { left: 8%; top: 20%; width: 18vmin; height: 18vmin; animation-duration: 16s; }
        .b2 { left: 75%; top: 18%; width: 26vmin; height: 26vmin; animation-duration: 19s; }
        .b3 { left: 15%; top: 70%; width: 20vmin; height: 20vmin; animation-duration: 15s; }
        .b4 { left: 82%; top: 68%; width: 16vmin; height: 16vmin; animation-duration: 13s; }
        .b5 { left: 46%; top: 10%; width: 14vmin; height: 14vmin; animation-duration: 12s; }
        .b6 { left: 52%; top: 75%; width: 24vmin; height: 24vmin; animation-duration: 20s; }

        @keyframes floatUp {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-26px); }
          100% { transform: translateY(0px); }
        }

        .hero {
          position: relative;
          z-index: 1;
          width: min(1100px, 92vw);
          padding: clamp(18px, 4vw, 40px);
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .logoWrap {
          display: grid;
          place-items: center;
          margin-bottom: 16px;
        }

        .logo {
          width: min(980px, 92vw);
          height: auto;
          transform: rotate(-8deg);
          filter: drop-shadow(0 18px 40px rgba(0,0,0,0.55));
        }

        .logoText {
          font-family: "SrutiGraffiti", "Impact", "Arial Black", system-ui, sans-serif;
          font-size: 170px;
          letter-spacing: -2px;
        }

        .shadow {
          fill: rgba(0, 0, 0, 0.35);
          transform: translate(10px, 10px);
          filter: blur(1px);
        }

        .outline {
          fill: transparent;
          stroke: rgba(255, 255, 255, 0.85);
          stroke-width: 18px;
          paint-order: stroke fill;
          filter: url(#glow);
        }

        .fill {
          fill: url(#fillGrad);
          stroke: rgba(0, 0, 0, 0.22);
          stroke-width: 6px;
          paint-order: stroke fill;
          filter: url(#glow);
        }

        .shine {
          fill: url(#shineGrad);
          opacity: 0.55;
        }

        .taglines {
          display: grid;
          gap: 10px;
          padding: 8px 0 6px;
        }

        .tag1 {
          font-size: clamp(18px, 2.2vw, 26px);
          font-weight: 650;
          letter-spacing: 0.02em;
          opacity: 0.95;
        }

        .tag2 {
          font-size: clamp(14px, 1.6vw, 18px);
          letter-spacing: 0.08em;
          opacity: 0.85;
        }
      `}</style>
    </main>
  );
}

}
