"use client"

import { useState } from "react"

export default function ProfilePage() {

  const [skills, setSkills] = useState("")
  const [interests, setInterests] = useState("")
  const [experience, setExperience] = useState("")
  const [bio, setBio] = useState("")

  async function updateProfile() {

    const token = localStorage.getItem("token")

    const response = await fetch(
      "http://127.0.0.1:8000/update-profile",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          skills,
          interests,
          experience,
          bio
        })
      }
    )

    const data = await response.json()

    console.log(data)

    alert("Profile Updated 🚀")
  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px",
        color: "white"
      }}
    >

      <h1>Update Profile 🚀</h1>

      <input
        placeholder="Skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "12px",
          width: "300px"
        }}
      />

      <input
        placeholder="Interests"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "12px",
          width: "300px"
        }}
      />

      <input
        placeholder="Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "12px",
          width: "300px"
        }}
      />

      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "12px",
          width: "300px",
          height: "120px"
        }}
      />

      <button
        onClick={updateProfile}
        style={{
          padding: "12px 20px",
          background: "#38bdf8",
          border: "none",
          borderRadius: "10px",
          color: "white"
        }}
      >
        Save Profile
      </button>

    </div>
  )
}