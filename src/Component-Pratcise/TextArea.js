import React , {useState} from 'react';
import "./Style.css";

function TextArea(props) {
    const [text,setText] = useState("");
    const [count,countCharacter] = useState("");
    const [words,countWords] = useState("");

    const convertTextToUpper = () => {
        console.log(text);
        setText(text.toUpperCase());
    }

    const convertTextToLower = () => {
        console.log(text);
        setText(text.toLowerCase());
    }

    const clearText = () => {
        console.log(text);
        setText("");
        countCharacter("0");
        countWords("0");
    }

    const changeTextArea = (event) => {
        setText(event.target.value);
        countCharacter(event.target.value.length);
        let words = event.target.value.split(" ");
        countWords(words.length);
    }

    let countPara = {
        marginLeft: "10%",
        fontSize: "18px",
        marginTop: "15px",
        fontWeight: "bolder",
        color : props.textColor
    };

    let divBox = {
        margin: "3% auto",
        height: "150px",
        width: "84%"
    };

    let h1Tag = {
        marginLeft: "2%",
        marginTop: "15px",
        fontWeight: "bolder",
        fontSize: "30px",
        color: "green"
    };

    let paraStyle = {
        fontWeight : "bolder",
        fontSize : "15px",
        // border : "1px solid black",
        width : "70%",
        marginLeft : "15%",
        padding : "1% 2%",
        color : props.textColor
    };

    return (
        <div className='textArea'>
            <textarea name="" id="" cols="30" rows="10"  className='area' onChange={changeTextArea} placeholder='Enter some text' value={text} style={props.inputTextStyle} />
            <button type="button" className="btn btn-outline-success" onClick={convertTextToUpper}>To Upper Case</button>
            <button type="button" className="btn btn-outline-danger btn2" onClick={convertTextToLower}>To Lower Case</button>
            <button type="button" className="btn btn-outline-warning btn2" onClick={clearText}>Clear Text</button>
            <div style={divBox}>
                <h1 style={h1Tag}>Above Text Highlights</h1>
                <p style={countPara}>Characters in the text are : {count}</p>
                <p style={countPara}>Words in the text are : {words}</p>
                <h1 style={h1Tag}>Preview</h1>
                {/* <textarea name="" id="" cols="30" rows="10" onChange={changeTextArea} value={text} className="textareaStyle" style={props.inputTextStyle} readOnly /> */}
                <p style={paraStyle}>{text}</p>
            </div>
        </div>
    )
}

export default TextArea;





