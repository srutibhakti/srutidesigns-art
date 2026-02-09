export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#ffffff",
        position: "relative",
      }}
    >
      {/* Dark dreamy overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,10,25,0.45), rgba(10,10,25,0.75))",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "2rem" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            marginBottom: "1rem",
            letterSpacing: "0.04em",
          }}
        >
          Sruti&apos;s Designs
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            opacity: 0.95,
            maxWidth: "520px",
            lineHeight: 1.6,
          }}
        >
          Design that shapes spaces.
          <br />
          <em>Immersive visual experiences in murals.</em>
        </p>
      </div>
    </main>
  );
}
