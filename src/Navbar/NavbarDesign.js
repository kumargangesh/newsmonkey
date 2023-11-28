import React, { useEffect, useState } from 'react';
import "./Style.css";
import {Link} from "react-router-dom";

function NavbarDesign(props) {

  const [rightProp, setRightProp] = useState({
    right : "0%"
  });

  const [opacityProp, setOpacityProp] = useState({
    opacity : "0"
  });

  const [mode, toggleMode] = useState(0);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if(windowWidth >= 900){
        setRightProp({right : "0%"});
        setOpacityProp({opacity : "0"});
      }else if(windowWidth <= 899){
        setRightProp({right : "100%"});
        setOpacityProp({opacity : "1"});
      }
    }
    window.addEventListener('resize',handleResize);
    return() => {
      window.removeEventListener('resize',handleResize);
    };
  },[]);

  const showDiv = () => {
    if(window.innerWidth <= 899){
      setRightProp({right : "0%"});
    }
  }

  const closeDiv = () => {
    if(window.innerWidth <= 899){
      setRightProp({right : "100%"});
    }
  }

  const changeMode = () => {
    if(mode === 0){
      toggleMode(1);
      document.body.style.backgroundColor="#F0FFFA"
      props.toggleDesign({
        // color : "black"
        color : "black"
      });
      props.setDivBack({
        backgroundColor : "black"
      });
    }else if(mode === 1){
      toggleMode(0);
      document.body.style.backgroundColor="rgb(12, 25, 37)";
      props.toggleDesign({
        color : "#BFA181"
      });
      props.setDivBack({
        backgroundColor : "white"
      });
    }
    closeDiv();
  }

  return (
    <div>
      <div className="mainDiv">
        <span className='threeBarsIcon' onClick={showDiv} style={opacityProp}>&#9776;</span>
        <span className='navbarName'>Navbar</span>
        <div className='secondDiv'  style={rightProp}>
          <span className='crossIcon' onClick={closeDiv}  style={opacityProp}>&#9932;</span>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode} />
          </div>
          <Link to="/"><div className='home' onClick={closeDiv}>HOME</div></Link>
          <Link to="/aboutme"><div className='home' onClick={closeDiv}>ABOUT ME</div></Link>
          <Link to="/skills"><div className='home' onClick={closeDiv}>SKILLS</div></Link>
          <Link to="/projects"><div className='home' onClick={closeDiv}>PROJECTS</div></Link>
          <Link to="/contactme"><div className='home' onClick={closeDiv}>CONTACT ME</div></Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarDesign;
