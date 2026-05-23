export default function HomePage() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}
    >

      <h1
        style={{
          fontSize: "60px",
          marginBottom: "20px"
        }}
      >
        AI Team Platform 🚀
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "700px",
          marginBottom: "40px",
          color: "#cbd5e1"
        }}
      >
        Find the best hackathon teammates using AI-powered matching based on skills, interests, and experience.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >

        <a
          href="/signup"
          style={{
            padding: "15px 30px",
            background: "#38bdf8",
            borderRadius: "12px",
            color: "white",
            textDecoration: "none",
            fontSize: "18px"
          }}
        >
          Signup
        </a>

        <a
          href="/login"
          style={{
            padding: "15px 30px",
            background: "#22c55e",
            borderRadius: "12px",
            color: "white",
            textDecoration: "none",
            fontSize: "18px"
          }}
        >
          Login
        </a>

      </div>

    </div>
  )
}