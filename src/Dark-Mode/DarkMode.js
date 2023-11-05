import React, { useState } from 'react'

function DarkMode() {

  const [modes, changeModes] = useState("Enable Dark Mode");
  const [buttonStyle, changeButtonStyle] = useState({
    backgroundColor: "white",
    color: "black",
    marginTop: "20px",
    padding: "1% 2.5%",
    fontWeight: "bolder",
    border: "2px solid black"
  });

  const [contanierStyle, changeContainerStyle] = useState({
    backgroundColor: "white",
    color: "black"
  });

  const changeMode = () => {
    let backgroundButtonColor = buttonStyle.backgroundColor;
    let backgroundCotainerColor = contanierStyle.backgroundColor;
    if(backgroundButtonColor==="black" && backgroundCotainerColor==="black"){
      changeButtonStyle({
        backgroundColor: "white",
        color: "black",
        marginTop: "20px",
        padding: "1% 2.5%",
        fontWeight: "bolder",
        border: "2px solid black"
      });
      changeModes("Enable Dark Mode");
      changeContainerStyle({
        backgroundColor: "white",
        color: "black"
      });
    }else if(backgroundButtonColor==="white" && backgroundCotainerColor==="white"){
      changeButtonStyle({
        backgroundColor: "black",
        color: "white",
        marginTop: "20px",
        padding: "1% 2.5%",
        fontWeight: "bolder",
        border: "2px solid white"
      });
      changeModes("Enable Light Mode");
      changeContainerStyle({
        backgroundColor: "black",
        color: "white"
      });
    }
  }

  return (
    <div className='container my-5' style={contanierStyle}>
      <div class="accordion" id="accordionExample" style={contanierStyle}>
        <div class="accordion-item" style={contanierStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={contanierStyle}>
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={contanierStyle}>
            <div class="accordion-body" style={contanierStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={contanierStyle}>
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={contanierStyle}>
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={contanierStyle}>
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={contanierStyle}>
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={contanierStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button onClick={changeMode} style={buttonStyle} className='btn btn-dark'>{modes}</button>
    </div>
  )
}

export default DarkMode;
