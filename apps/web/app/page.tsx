export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fcbad3, #ffdde1)",
        animation: "bgAnimation 12s ease-in-out infinite",
        backgroundSize: "400% 400%",
        fontFamily: "sans-serif",
        overflow: "hidden",
        border: "12px solid pink",
        boxShadow: "0 0 40px rgba(255, 100, 150, 0.5)",
      }}
    >
      {/* Floating Flowers */}
      <div className="flowers">
        <span className="flower">🌸</span>
        <span className="flower">🌼</span>
        <span className="flower">🌺</span>
        <span className="flower">🌸</span>
        <span className="flower">🌼</span>
        <span className="flower">🌺</span>
      </div>

      {/* Main Text */}
      <div className="love-container" style={{ textAlign: "center" }}>
        <h1 className="love-text">I love you Sumaiya ❤️</h1>
        <p className="love-message">
          You are the most beautiful part of my life.  
          Every moment with you feels magical, and my heart chooses you again and again ❤️
        </p>
      </div>

      <style>
        {`
          .love-text {
            font-size: 52px;
            font-weight: 700;
            color: #b30059;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
            animation: fadeIn 2s ease-in-out, heartbeat 1.5s infinite;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes heartbeat {
            0% { transform: scale(1); }
            25% { transform: scale(1.1); }
            40% { transform: scale(0.95); }
            60% { transform: scale(1.15); }
            100% { transform: scale(1); }
          }

          /* Floating Flowers */
          .flowers {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .flower {
            position: absolute;
            font-size: 32px;
            animation: float 8s infinite ease-in-out;
            opacity: 0.8;
          }

          .flower:nth-child(1) { left: 10%; animation-delay: 0s; }
          .flower:nth-child(2) { left: 30%; animation-delay: 1s; }
          .flower:nth-child(3) { left: 50%; animation-delay: 2s; }
          .flower:nth-child(4) { left: 70%; animation-delay: 3s; }
          .flower:nth-child(5) { left: 85%; animation-delay: 1.5s; }
          .flower:nth-child(6) { left: 40%; animation-delay: 2.5s; }

          @keyframes float {
            0% {
              transform: translateY(100vh) rotate(0deg);
            }
            100% {
              transform: translateY(-10vh) rotate(360deg);
            }
          }

          .love-message {
            font-size: 24px;
            margin-top: 20px;
            color: #7a0040;
            text-align: center;
            max-width: 700px;
            animation: fadeIn 3s ease-in-out;
          }

          @keyframes bgAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}