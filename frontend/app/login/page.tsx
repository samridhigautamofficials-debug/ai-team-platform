"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {

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

    console.log(data)

    if (response.ok && data.access_token) {

      localStorage.setItem("token", data.access_token)

      alert("Login Successful 🚀")

      router.push("/dashboard")

    } else {
      alert(data.error || "Login Failed ❌")
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a"
    }}>

      <div style={{ background: "#1e293b", padding: "30px", borderRadius: "10px" }}>

        <h1 style={{ color: "white" }}>Login</h1>

        <input placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input placeholder="Password" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  )
}