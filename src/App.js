import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setMessage("Happy Halloween! 🎃👻");
    setShowButton(false); // Hide the button
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        flexDirection: "column", // Align button and message vertically
        backgroundColor: "black", // Black background
        color: "white", // Default text color
      }}
    >
      {showButton && (
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Click Me!
        </button>
      )}
      <h1
        style={{
          color: "orange",
          marginTop: "20px",
          fontSize: "3rem",
          textAlign: "center",
          animation: message ? "glow 1.5s infinite alternate" : "none", // Glow effect on text
        }}
      >
        {message}
      </h1>
      <style>
        {`
          @keyframes glow {
            0% {
              text-shadow: 0 0 10px orange, 0 0 20px orange, 0 0 30px orange, 0 0 40px orange;
            }
            100% {
              text-shadow: 0 0 20px yellow, 0 0 30px yellow, 0 0 40px yellow, 0 0 50px yellow;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
