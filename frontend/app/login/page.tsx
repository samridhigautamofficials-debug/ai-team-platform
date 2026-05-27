"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {

    try {

      const response = await fetch(
        "https://ai-team-platform-e64i.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      )

      const data = await response.json()

      console.log("LOGIN RESPONSE:", data)

      if (response.ok) {

        localStorage.setItem("token", data.access_token)

        alert("Login Successful 🚀")

        router.push("/dashboard")

      } else {
        alert(data.error || data.detail || "Login Failed ❌")
      }

    } catch (error) {
      console.log("ERROR:", error)
      alert("Server not responding ❌")
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", display: "flex", justifyContent: "center", alignItems: "center" }}>

      <div style={{ background: "#1e293b", padding: "40px", borderRadius: "20px", width: "350px" }}>

        <h1 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
          Login 🚀
        </h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        <button
          onClick={handleLogin}
          style={{ width: "100%", padding: "12px", background: "#38bdf8", color: "white" }}
        >
          Login
        </button>

      </div>

    </div>
  )
}