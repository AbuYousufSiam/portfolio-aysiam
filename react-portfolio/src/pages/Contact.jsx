import React from "react";
import Button from "../components/Button";
import { FaGithub } from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // add your submission logic here
    console.log("Form submitted!");
  };

  const project = {
    name: 'My Portfolio',
    githubLink: 'https://github.com/AbuYousufSiam',
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif", padding: "0 20px" }}>
      <h2 style={{ color: "#2E8B57", marginBottom: "30px", textAlign: "center" }}>Contact Me</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
        <Button label="Send Email" onClick={() => alert("Clicked")} />
        <Button
          variant="secondary"
          label="Download Resume"
          onClick={() => window.open("resume.pdf")}
        />
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="name"
            style={{ fontWeight: "600", marginBottom: "8px", color: "#333" }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            style={{
              padding: "10px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
              outlineColor: "#2E8B57",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="email"
            style={{ fontWeight: "600", marginBottom: "8px", color: "#333" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            style={{
              padding: "10px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
              outlineColor: "#2E8B57",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="message"
            style={{ fontWeight: "600", marginBottom: "8px", color: "#333" }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Write your message here..."
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
              resize: "vertical",
              outlineColor: "#2E8B57",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#2E8B57",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#246b45")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2E8B57")}
        >
          Send Message
        </button>
      </form>

      <div style={{ marginTop: "40px", textAlign: "center", color: "#666" }}>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#2E8B57", fontSize: "18px", display: "inline-flex", alignItems: "center", gap: "8px" }}
        >
          <FaGithub size={24} />
          Visit My GitHub
        </a>
      </div>
    </div>
  );
}
