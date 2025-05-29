import React from 'react';

const projectData = [
  {
    title: "Personal Improvement Monitor",
    description: "A monitoring app for personal growth.",
    technologies: ["Java", "SQLite", "Firebase"],
    github: "https://github.com/AbuYousufSiam/Personal-Improvement-Monitor",
  },
  {
    title: "Resort Management System (Web)",
    description: "A complete website for managing resort reservations, rooms, guests, and billing with admin portal.",
    technologies: ["PHP", "JavaScript", "MySQL"],
    github: "https://github.com/AbuYousufSiam/RMS-Resort",
  },
  {
    title: "Hospital Management Desktop App",
    description: "Java-based system for managing hospital patients, doctors, appointments, and billing with GUI.",
    technologies: ["Java", "Swing", "MySQL"],
    github: "https://github.com/yourusername/hospital-management",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website using Tailwind CSS and JavaScript.",
    technologies: ["JavaScript", "Tailwind CSS", "React.js", "MySQL"],
    github: "https://github.com/AbuYousufSiam/portfolio-aysiam",
  }
];

const ProjectCard = ({ title, description, technologies, github }) => (
  <div style={{
    backgroundColor: "#f8f8f8",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer"
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
  >
    <h2 style={{ color: "#2E8B57", marginBottom: "10px" }}>{title}</h2>
    <p style={{ color: "#444" }}>{description}</p>
    <p style={{ fontStyle: "italic", color: "#666" }}>
      <strong>Tech Stack:</strong> {technologies.join(", ")}
    </p>
    {github && (
      <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: "#007acc", textDecoration: "none" }}>
        🔗 View on GitHub
      </a>
    )}
  </div>
);

export const Projects = () => {
  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#2E8B57", marginBottom: "30px" }}>My Projects</h1>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
