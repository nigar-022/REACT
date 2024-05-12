//use Effect
import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, sety] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Evenet");
    setX(e.clientX);
    sety(e.clientY);
  };

  useEffect(() => {
    console.log("effect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {

        console.log("unmount called");

        window.removeEventListener('mousemove',logMousePosition)
    }
  },[]);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}
export default HookMouse;
