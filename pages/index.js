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
        background:
          "radial-gradient(circle at top, #f5c2e7, #cba6f7, #89b4fa)",
        color: "#ffffff",
        fontFamily: "serif",
        transition: "background 1s ease",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "0.75rem",
          letterSpacing: "0.04em",
        }}
      >
        Sruti&apos;s Designs
      </h1>

      <div
        style={{
          display: "grid",
          gap: "0.4rem",
          opacity: 0.95,
        }}
      >
        <div
          style={{
            fontSize: "1.4rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          Design That Shapes Spaces
        </div>

        <div
          style={{
            fontSize: "1.05rem",
            opacity: 0.9,
            letterSpacing: "0.08em",
          }}
        >
          Immersive Visual Experiences
        </div>
      </div>

      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "0.95rem",
          opacity: 0.7,
        }}
      >
        Website launching soon ✨
      </p>
    </main>
  );
}
