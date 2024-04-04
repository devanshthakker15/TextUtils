import React, {useState} from 'react'

// console.log(useState("Enter text here2"))

export default function Textform(props) {
    const [text, setText] = useState("Enter text here");
   
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case","success")
    }

    const handleDownClick = () =>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case","success")
    }

    const handleClearClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText)
        props.showAlert("Text area is clear","success")
    }

    const replaceCaseFunction = () =>{
        let existingText = prompt("Enter word to be replaced: ");
        let replacedText = prompt("Enter the new word: ");
        setText(text.replaceAll(existingText,replacedText))
        props.showAlert("The word has been replaced","success")
    }

    const handleCopy =() =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
    }

    const handleExtraSpaces=() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been removed","success")
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

  return (
   <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">                                                             
            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey': 'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-2"  onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3 my-2" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3 my-2" onClick={replaceCaseFunction}>Replace</button>
        <button className="btn btn-primary mx-3 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-3 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

        

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Average reading time: {text.trim(" ").length * 0.008}</p>
        <h3>Preview</h3>
        <p>{text.length>0?text: "Enter something to preview it here"}</p>
    </div>
    </>
  )
}
