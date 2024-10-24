import React from 'react';

const Header = () => {
  return (
    <header className="intro-header">
      <h1>hi - i'm alaina, software engineer</h1>
      <h2>i'm so glad you're here</h2>
        <div className="header-buttons">
            <button style={{marginRight: "20px"}}>View Resumé</button>
            <button>Contact Me</button>
        </div>
        <img src="path/to/headshot.jpg" alt="Alaina's headshot. Add more description once headshot is chosen" /> {/* Replace with actual path */}
    </header>
  );
};

export default Header;

// notes
// hi i'm alaina - software engineer
// welcome to my portfolio

// two buttons
// download CV + contact me

// headshot image