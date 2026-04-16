import { useState, useEffect } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({x: e.clientX, y: e.clientY});
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>X: {position.x}</h1>
      <h1>Y: {position.y}</h1>
    </div>
  );
}

export default App;