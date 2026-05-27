"use client"

import { useEffect, useState } from "react"

export default function DashboardPage() {

  const [data, setData] = useState<any>(null)

  useEffect(() => {

    async function getRecommendations() {

      const token = localStorage.getItem("token")

      const response = await fetch(
        "https://ai-team-platform-e64i.onrender.com/recommend-teammates",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      const result = await response.json()

      console.log(result)

      setData(result)
    }

    getRecommendations()

  }, [])

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px"
      }}
    >

      <h1
        style={{
          fontSize: "40px",
          marginBottom: "20px"
        }}
      >
        Dashboard 🚀
      </h1>

      <a
        href="/profile"
        style={{
          display: "inline-block",
          marginBottom: "30px",
          padding: "12px 20px",
          background: "#38bdf8",
          borderRadius: "10px",
          color: "white",
          textDecoration: "none"
        }}
      >
        Update Profile
      </a>

      <h2
        style={{
          marginBottom: "20px"
        }}
      >
        Recommended Teammates
      </h2>

      {
        data?.recommended_teammates?.length > 0 ? (

          data.recommended_teammates.map(
            (user: any, index: number) => (

              <div
                key={index}
                style={{
                  background: "#1e293b",
                  padding: "20px",
                  borderRadius: "15px",
                  marginBottom: "20px"
                }}
              >

                <h2
                  style={{
                    color: "#38bdf8"
                  }}
                >
                  {user.username}
                </h2>

                <p>
                  <strong>Skills:</strong> {user.skills || "Not added"}
                </p>

                <p>
                  <strong>Interests:</strong> {user.interests || "Not added"}
                </p>

                <p>
                  <strong>Experience:</strong> {user.experience || "Not added"}
                </p>

                <p>
                  <strong>Bio:</strong> {user.bio || "No bio"}
                </p>

                <p
                  style={{
                    marginTop: "10px",
                    color: "#22c55e",
                    fontWeight: "bold"
                  }}
                >
                  Match Score: {user.score}
                </p>

              </div>
            )
          )

        ) : (

          <p>No teammate recommendations yet.</p>
        )
      }

    </div>
  )
}