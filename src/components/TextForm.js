import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = ()=> {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");

    }
    const handleOnChange = (event)=> {
        // console.log("On change was clicked");
        setText(event.target.value); 
    }

    // More Functionalities
    const handleClearClick = (event)=> {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");

    }
    const handleRepeatClick = (event)=> {
        let newText = text.repeat(4);
        setText(newText);
        props.showAlert("Repeat Text!", "success");

    }
    const handleReverseClick = (event)=> {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text has been reversed!", "success");

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");


    }

    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");

    }

    const [text, setText] = useState('Enter Text Here');  
    return (
        <>
        <div className='container' style={{color: (props.mode==='dark'?'white':'black')}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} 
                style={{backgroundColor: (props.mode==='dark'?'grey':'white'), color: (props.mode==='dark'?'white':'black')}} onChange={handleOnChange} aria-label="With textarea" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode==='light'?'info':'dark'} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.mode==='light'?'info':'dark'} mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>
            {/* More Buttons */}

            <button className={`btn btn-${props.mode==='light'?'info':'dark'} mx-1`} onClick={handleClearClick}>Clear Text</button>
            <button className={`btn btn-${props.mode==='light'?'info':'dark'} mx-1`} onClick={handleRepeatClick}>Repeat Text</button>
            <button className={`btn btn-${props.mode==='light'?'info':'dark'} mx-1`} onClick={handleReverseClick}>Reverse Text</button>
            <button className={`btn btn-${props.mode==='light'?'info':'dark'} mx-1`} onClick={handleCopy}>Copy Text</button>
            <button className={`btn btn-${props.mode==='light'?'info':'dark'} mx-1`} onClick={handleExtraSpace}>Remove Extra Spaces</button>


            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

        </div>
        <div className="container my-2" style={{color: (props.mode==='dark'?'white':'black')}}>
            <h2>Your text summary</h2>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
            <p>{0.025 * text.split(" ").length} minutes reading time</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Text To Preview"}</p>

        </div>

        </>
    )
}
