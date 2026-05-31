export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0f172a, #1e293b)",
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <h2>AI Team Platform 🚀</h2>

        <div>
          <a
            href="/login"
            style={{
              color: "white",
              marginRight: "20px",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Login
          </a>

          <a
            href="/signup"
            style={{
              color: "#38bdf8",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Signup
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <h1
        style={{
          fontSize: "72px",
          marginBottom: "10px",
        }}
      >
        AI Team Platform 🚀
      </h1>

      <p
        style={{
          color: "#38bdf8",
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Build Winning Hackathon Teams with AI
      </p>

      <p
        style={{
          fontSize: "22px",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        Find the best hackathon teammates using AI-powered matching
        based on skills, interests, and experience.
      </p>

      {/* Buttons */}
      <div
        style={{
          marginTop: "40px",
          marginBottom: "80px",
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
            fontSize: "18px",
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
            fontSize: "18px",
          }}
        >
          Login
        </a>
      </div>

      {/* Features */}
      <h2
        style={{
          marginBottom: "40px",
          fontSize: "40px",
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
            padding: "30px",
            borderRadius: "20px",
            width: "280px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ fontSize: "24px" }}>
            🤖 AI Matching
          </h3>

          <p>
            Find teammates based on skill compatibility and shared interests.
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "20px",
            width: "280px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ fontSize: "24px" }}>
            ⚡ Fast Team Building
          </h3>

          <p>
            Build powerful hackathon teams within minutes.
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "20px",
            width: "280px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ fontSize: "24px" }}>
            🎯 Smart Recommendations
          </h3>

          <p>
            Receive ranked teammate suggestions powered by AI.
          </p>
        </div>
      </div>
    </div>
  )
}