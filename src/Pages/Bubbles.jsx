import React from 'react';


const Bubbles = () => {
  return (
    <> 
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="bubble absolute bg-red-300 rounded-full"
          style={{
            width: `${Math.random() * 50 + 50}px`,
            height: `${Math.random() * 50 + 50}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 5}s`
          }}
        ></div>
      ))}
    </div>
    </>
  );
}
export default Bubbles;
