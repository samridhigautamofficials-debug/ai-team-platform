"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {

  const router = useRouter()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignup() {

    const response = await fetch(
      "https://ai-team-platform-e64i.onrender.com/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      }
    )

    const data = await response.json()

    console.log(data)

    if (response.ok) {
      alert("Signup Successful 🚀")
      router.push("/login")
    } else {
      alert(data.error || "Signup Failed ❌")
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

        <h1 style={{ color: "white" }}>Signup</h1>

        <input placeholder="Username" value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <input placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input placeholder="Password" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleSignup}>
          Signup
        </button>

      </div>
    </div>
  )
}