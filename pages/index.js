export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#ffffff",
        background: `
          radial-gradient(circle at top, rgba(255,182,193,0.35), transparent 60%),
          radial-gradient(circle at bottom, rgba(173,216,230,0.35), transparent 60%),
          linear-gradient(180deg, #0b0b12, #141428)
        `,
        fontFamily: "serif",
        overflow: "hidden",
      }}
    >
      {/* Soft floating glow layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 40%, rgba(255,182,193,0.25), transparent 40%), radial-gradient(circle at 70% 60%, rgba(186,85,211,0.25), transparent 45%)",
          animation: "float 18s ease-in-out infinite",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "2rem" }}>
        <h1
          style={{
            fontSize: "3.2rem",
            marginBottom: "1rem",
            letterSpacing: "0.02em",
          }}
        >
          Sruti&apos;s Designs
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.9,
            maxWidth: "520px",
            lineHeight: 1.6,
          }}
        >
          Design that shapes spaces.
          <br />
          <em>Immersive visual experiences in murals.</em>
        </p>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </main>
  );
}
