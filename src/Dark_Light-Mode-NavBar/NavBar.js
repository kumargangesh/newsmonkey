import React from 'react'
import { useState } from 'react';
import TextArea from '../Component-Pratcise/TextArea';

function NavBar() {

    const [textColor, setTextColor] = useState("black");
    const [mode, setMode] = useState("Light");
    const [toggleMode, setToggleMode] = useState("Dark Mode");
    const [modeValue, setModeValue] = useState("off");
    const [navBarBackGround, setNavBarBackGround] = useState({
        backgroundColor : "#dcdcdc"
    });
    const [toggleModeStyle, setToggleModeStyle] = useState({
        color: "black",
        display: "inline",
        marginLeft: "15px",
        fontWeight : "bolder"
    });
    const[textAreaBackground, settextAreaBackground] = useState({
        backgroundColor : "white",
        color : "black"
    });
    const [navBarTextColor, setNavBarTextColor] = useState({
        color : "black",
        fontWeight: "bolder"
    });

    const changeMode = (event) => {
        if(modeValue=="off"){
            document.body.style.backgroundColor="#042743";
            setModeValue("on");
            setMode("Dark");
            setToggleMode("Light Mode");
            setToggleModeStyle({
                color: "white",
                display: "inline",
                marginLeft: "15px",
                fontWeight: "bolder"
            });
            settextAreaBackground({
                backgroundColor : "grey",
                color : "white"
            });
            setNavBarBackGround({
                backgroundColor : "black"
            });
            setNavBarTextColor({
                color: "white",
                fontWeight: "bolder"
            });
            setTextColor("white");
        }else if(modeValue=="on"){
            document.body.style.backgroundColor="white";
            setModeValue("off");
            setMode("Light");
            setToggleMode("Dark Mode");
            setToggleModeStyle({
                color: "black",
                display: "inline",
                marginLeft: "15px",
                fontWeight: "bolder"
            });
            settextAreaBackground({
                backgroundColor : "white",
                color : "black"
            });
            setNavBarBackGround({
                backgroundColor : "#dcdcdc",
                fontWeight: "bolder"
            });
            setNavBarTextColor({
                color: "black",
                fontWeight: "bolder"
            });
            setTextColor("black");
        }
        console.log(modeValue);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={navBarBackGround} >
                <div className="container-fluid">
                    <a className="navbar-brand" style={navBarTextColor} href="#">{mode} NavBar</a>
                    <button className="navbar-toggler text-light" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color: "white"}}>
                        <div class="form-check form-switch" style={{ marginLeft: "80%"}}>
                            <p style={toggleModeStyle}>{toggleMode}</p>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode}/>
                        </div>
                    </div>
                </div>
            </nav>
            <TextArea inputTextStyle={textAreaBackground} textColor={textColor} />
        </div>
    )
}

export default NavBar;


