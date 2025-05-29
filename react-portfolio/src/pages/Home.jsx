import { useState, useEffect } from "react";
import Button from "../components/Button";
//useState is used to store and manage data (in this case, text).
//useEffect is used to run code after the component has rendered (used here to simulate typing).

export default function Home() {

  const [text, setText] = useState(''); //Initializes a state variable text with an empty string ('').

  const name = "A.y. Siam";
  const university = "Jagannath University, Dhaka";

  const fullText = `Hi there! This is ${name} from ${university}`;
  //We’ll use this to simulate a typing animation.

  useEffect(() => {
    //Purpose: This hook runs once after the component is displayed on the screen.
    //Think of it like “do this after loading”.

    let index = 0; //Purpose: Keeps track of which character to add next from fullText.

    const interval = setInterval(() => { //This starts a repeating times, update text on every 100 milliseconds or 0.1 second
      index++;
      setText(fullText.substring(0, index));
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval); //This is a cleanup function.
    //It ensures the interval timer is stopped if the component unmounts.
  }, []); //useEffect function ends here on the curly brace
  //This empty array [] tells useEffect to run only once, when the component is first loaded.

  // Additional professional info
  const profileImage = require('../img/pp.jpeg');
  const role = "Computer Science Engineer";
  const skills = ["Java", "Python", "Machine Learning", "Networking", "IoT"];
  const linkedinURL = "https://www.linkedin.com/in/abu-yousuf-siam"; // Placeholder, update if needed
  const githubURL = "https://github.com/AbuYousufSiam";

  return (
    <div style={{
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#333",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>

      {/* Centered typing animation greeting div */}
      <div style={{
        backgroundColor: "#cecfce",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "120px", // fixed height for vertical alignment space
        fontSize: "1.6rem",
        fontWeight: "600",
        color: "#222",
        marginBottom: "40px",
        textAlign: "center",
        minWidth: "280px"
      }}>
        {text}
      </div>

      {/* Rest of the content below */}
      <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap" }}>
        {/* Image section */}
        <div style={{
          flexShrink: 0,
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
        }}>
          <img src={profileImage} alt="Profile" style={{ width: '160px', borderRadius: '10%' }} />
        </div>

        {/* Text and info section */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h2 style={{ color: "#555", marginTop: 0 }}>{role}</h2>

          <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
            I am a dedicated Computer Science Engineer with a focus on Networking, IoT, and Machine Learning. Currently pursuing advanced studies and developing projects that bridge technology and innovation.
          </p>

          <div style={{ marginTop: "20px" }}>
            <strong>Core Skills:</strong>
            <ul style={{ paddingLeft: "20px", marginTop: "8px", listStyleType: "circle" }}>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
            <Button
              label="View GitHub"
              onClick={() => window.open(githubURL)}
              variant="primary"
            />
            <Button
              label="LinkedIn"
              onClick={() => window.open(linkedinURL)}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
} // Home function ends here
