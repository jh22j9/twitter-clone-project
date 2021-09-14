import React from "react";
import './Banner.css';

function Banner() {
  const icons = [];
  for (let i = 1; i <= 10; i++) {
    icons.push(`Icon${i}`);
  }

  return (
    <div>
      {icons.map((icon) => (
        <div className="icon">{icon}</div>
      ))}
    </div>
  );
}

export default Banner;
