import React, { memo, useState } from "react";

export default memo(function Textarea(props) {
    const textAreaChanged = (event)=>{
        setText(event.target.value)
    }
    const changeToUppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is changed to Uppercase", "success")
    }
    const changeToLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Text is changed to Lowercase", "success")
    }
    const capitalizeFirstLetter = ()=>{
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Firt Letter of each word is Capitalized", "success")
    }
    const copyText = ()=> {
        let textAreaElement = document.getElementById("exampleFormControlTextarea1");
        textAreaElement.select();
        navigator.clipboard.writeText(textAreaElement.value);
        props.showAlert("Text is copied to Clipboard", "success")
    }
    const removeExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed from the text", "success")
    }
    const clearText = ()=>{
        setText("");
        props.showAlert("Text is cleared", "success")
    }
    const[text, setText]=useState("")
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h3 className="my-3">Enter your text below in the box to edit</h3>
          <label forHtml="exampleFormControlTextarea1" className="form-label">
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter your text here"
            value={text}
            onChange={event => textAreaChanged(event)}>
            </textarea>
        </div>
        <div>
          <button className="btn btn-primary mx-3" onClick={changeToUppercase}>Change to Uppercase</button>
          <button className="btn btn-primary mx-3" onClick={changeToLowercase}>Change to Lowercase</button>
          <button className="btn btn-primary mx-3" onClick={capitalizeFirstLetter}>Capitalize First Letter</button>
          <button className="btn btn-primary mx-3" onClick={copyText}>Copy text</button>
          <button className="btn btn-primary mx-3" onClick={removeExtraSpace}>Remove Extra spaces</button>
          <button className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
        </div>
         <p className="my-2">word count = {text==="" ? 0: text.split(" ").length}</p>
         <p className="my-2">char count = {text.length}</p>
         <h2 className="my-4">Preview</h2>
         <p>{text.length>0 ? text : "Enter the text in text area above to preivew"}</p>
      </div>
    </>
  );
});
