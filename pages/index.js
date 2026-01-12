export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top, #f5c2e7, #cba6f7, #89b4fa)",
        color: "#ffffff",
        textAlign: "center",
        fontFamily: "serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Sruti’s Designs
      </h1>
      <p style={{ maxWidth: "420px", opacity: 0.9 }}>
        Murals • Art • Storytelling
        <br />
        Website launching soon ✨
      </p>
    </main>
  );
}
