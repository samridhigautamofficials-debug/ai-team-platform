export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        AI Team Platform 🚀
      </h1>

      <p
        style={{
          fontSize: "22px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        Find the best hackathon teammates using AI-powered matching
        based on skills, interests, and experience.
      </p>

      <div
        style={{
          marginTop: "40px",
        }}
      >
        <a
          href="/signup"
          style={{
            padding: "15px 30px",
            background: "#38bdf8",
            color: "white",
            textDecoration: "none",
            borderRadius: "10px",
            marginRight: "15px",
          }}
        >
          Get Started
        </a>

        <a
          href="/login"
          style={{
            padding: "15px 30px",
            background: "#22c55e",
            color: "white",
            textDecoration: "none",
            borderRadius: "10px",
          }}
        >
          Login
        </a>
      </div>

      <h2
        style={{
          marginTop: "80px",
          marginBottom: "30px",
        }}
      >
        Features
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            width: "250px",
          }}
        >
          <h3>🤖 AI Matching</h3>
          <p>Find teammates based on skill compatibility.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            width: "250px",
          }}
        >
          <h3>⚡ Fast Team Building</h3>
          <p>Create strong hackathon teams quickly.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            width: "250px",
          }}
        >
          <h3>🎯 Smart Recommendations</h3>
          <p>Get ranked teammate suggestions instantly.</p>
        </div>
      </div>
    </div>
  )
}