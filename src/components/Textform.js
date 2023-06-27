import React, { useState } from "react";
import Alert from "./Alert";
// let text = ""

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleonchange = (e) => {
    // console.log('changed')
    setText(e.target.value);
  };
  const handleonclick = () => {
    if (text.length === 0) {
      props.showAlert("Nothing to Convert", 'warning');
    } else{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase",'success')
    }
   
  

  };
  const handleondclick = () => {
    if (text.length === 0) {
      props.showAlert("Nothing to Convert", 'warning');
    }else{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase",'success')
  
    }
  
  };
  // const handleonlen = ()=>{
  //     let newText = text.length
  //     setText(newText)
  //     // console.log("button clicked")
  // }
  const clearstring = () => {
    if (text.length === 0) {
      props.showAlert("Nothing to Clear", 'warning');
    } else {
      let newText = "";
      setText(newText);
      props.showAlert('Text cleared', 'success');
    }
  }
  
  // const wordcount = () =>{
  //     const words = text.trim().split(" ").filter(words => words!=="")
  //     return words
  // }
  const exspace = () => {
    if (text.length === 0) {
      props.showAlert("No Extra Spaces  ", 'warning');
    } 
    else{
      let newText = text.split(/[ ]+/);
      setText (newText.join(" "))
      props.showAlert("Extra Space Removed",'success')
    }
  

  };
  const copytext = () => {
    if(text.length == 0){
      props.showAlert("Nothing to copy", "warning")
    }
    else{
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            props.showAlert("Copied to Clipboard",'success')
  
          })
          .catch((error) => {
            console.error("Failed to copy text to clipboard:", error);
          });
      } else {
        props.showAlert("Clipboard API not supported on this device.",'warning')
  
      }
    }
    
  };
  return (
    <>
      <div style={{color : props.mode=='light'?'black':'white'}}
>
        <h1>{props.heading}</h1>
        <div className="form-group">
          {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
          <textarea
            class="form-control"
            value={text}
            onChange={handleonchange}
            style={{backgroundColor : props.mode=='light'?'white':'black',color : props.mode=='dark'?'white':'black'}}
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleonclick}>
          Convert the Text to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleondclick}>
          Convert the Text to LowerCase
        </button>
        {/* <button className="btn btn-primary" onClick={handleonlen}>Count the length</button> */}
        <button className="btn btn-primary mx-2 my-2" onClick={exspace}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-danger mx-2 my-2" onClick={clearstring}>
          Clear Text
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={copytext}>
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode=='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter((text) => text !== "").length
          }{" "}
          words and {text.length} Characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview here"}</p>
      </div>
    </>
  );
}
// to count spaces
// {text.split(" ").length} Spaces
