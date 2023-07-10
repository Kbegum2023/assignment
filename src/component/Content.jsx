import React, { useState } from 'react';

const Content = () => {
  const [buttonClicked, setButtonClicked] = useState(true);

  const handleButtonClick = () => {
    setButtonClicked(false);
  };

  return (
    <div className='content_container'>
      {buttonClicked ? (
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime quos dolore, facilis quis eum sunt
            blanditiis consequuntur non laudantium molestiae illum odit tempora aut! Officia laudantium velit nesciunt
            sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime quos dolore, facilis quis eum
            sunt blanditiis consequuntur non laudantium molestiae illum odit tempora aut! Officia laudantium velit
            nesciunt sequi?
          </p>
        </div>
      ) : null}

      <button onClick={handleButtonClick} className='btn'>
        Click Here
      </button>

      {!buttonClicked ? (
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime quos dolore, facilis quis eum sunt
            blanditiis consequuntur non laudantium molestiae illum odit tempora aut! Officia laudantium velit nesciunt
            sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime quos dolore, facilis quis eum
            sunt blanditiis consequuntur non laudantium molestiae illum odit tempora aut! Officia laudantium velit
            nesciunt sequi?
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Content;
