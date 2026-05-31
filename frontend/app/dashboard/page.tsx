export default function DashboardPage() {
  const teammates = [
    {
      name: "Rahul",
      skills: "React, Next.js, Node.js",
      experience: "2 Years",
      match: "95%"
    },
    {
      name: "Priya",
      skills: "UI/UX, Figma",
      experience: "3 Years",
      match: "90%"
    },
    {
      name: "Aman",
      skills: "AI, Python, ML",
      experience: "4 Years",
      match: "98%"
    }
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h1>AI Team Platform 🚀</h1>

        <button
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <h2>Welcome Back 👋</h2>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        AI recommended teammates for you
      </p>

      <input
        placeholder="Search teammates..."
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          marginBottom: "30px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {teammates.map((user, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "15px",
              width: "300px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
          >
            <h3>{user.name}</h3>

            <p>
              <strong>Skills:</strong> {user.skills}
            </p>

            <p>
              <strong>Experience:</strong> {user.experience}
            </p>

            <p
              style={{
                color: "#22c55e",
                fontWeight: "bold",
              }}
            >
              Match Score: {user.match}
            </p>

            <button
              style={{
                width: "100%",
                marginTop: "10px",
                background: "#38bdf8",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}