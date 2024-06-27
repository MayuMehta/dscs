import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');

    const change=(e)=>{
        setText(e.target.value) 
        // console.log(e);
    }

    const clickUpper=()=>{
        if(text===''){
            props.showAlert("Enter text to change","warning")
        }else{
            setText(text.toUpperCase());
            // props.showAlert("Changed to Upper case","success")
        } 
    }
    
    const clickLower=()=>{
        if(text===''){
            props.showAlert("Enter text to change","warning")
        }else{
            setText(text.toLowerCase());
            // props.showAlert("Changed to Lower case","success")
        }
    }

    const clickSpeak=()=>{
        if(text===''){
            props.showAlert("Enter text to speak","warning")
        }else{
            var msg=new SpeechSynthesisUtterance();
            msg.text=text;
            window.speechSynthesis.speak(msg);
        }
    }
    const clickClear=()=>{
        if(text===''){
            props.showAlert("Nothing to clear","warning")
        }else{
            setText("");
        }
    }
    const clickExtraSpace=()=>{
        if(text===''){
            props.showAlert("Enter text to remove","warning")
        }
        else{
            let newText=text.split(/[ ]+/);
            setText(newText.join(' '))
        }
    }
    const clickCopyText=()=>{
        navigator.clipboard.writeText(text);
        if(text===''){
            props.showAlert("Nothing to copy","warning")
        }
        else{
            alert('Copied to clipboard..')
        }
    }
  return (
    <div className={`bg-${props.color} text-${props.textColor} my-n5`}>
        <div className={`my-3 bg-${props.color} container min-vh-100`}>
            <h1>Enter your text to analyse</h1>
            <textarea value={text} onChange={change} className={`form-control bg-${props.color} text-${props.textColor}`} id="exampleFormControlTextarea1" rows="10"></textarea>
            <div className="my-3 d-flex flex-wrap justify-content-start gap-2">
                <button className="btn btn-primary" onClick={clickUpper}>Upper Case</button>
                <button className="btn btn-primary" onClick={clickLower}>Lower Case</button>
                <button className="btn btn-primary" onClick={clickSpeak}>Speak</button>
                <button className="btn btn-primary" onClick={clickClear}>Clear</button>
                <button className="btn btn-primary" onClick={clickCopyText}>Copy Text</button>
                <button className="btn btn-primary" onClick={clickExtraSpace}>Remove extra space</button>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{text.split(' ').length-1} Words and {text.replace(/\s+/g,'').length} Character</p>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>   
    </div>
  )
}
