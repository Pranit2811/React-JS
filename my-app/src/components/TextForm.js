import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase','success')
  };
  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase','success')
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const handelCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copied','success')
  };
  const [text, setText] = useState(""); //use state hook
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            style={{
              color: props.mode === "light" ? "black" : "white   ",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
            onChange={handelOnChange}
            rows="3"
          ></textarea>
        </div>
        <div className="btn btn-primary mx-2" onClick={handelUpClick}>
          Convert To UpperCase
        </div>
        <div className="btn btn-primary mx-2" onClick={handelLoClick}>
          Convert To LowerCase
        </div>
        <div className="btn btn-primary mx-2" onClick={handelCopy}>
          Copy
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <p className="mx-2">
          {text.split(" ").length - 1} Words, {text.length} Charecters
        </p>
      </div>
    </>
  );
}
