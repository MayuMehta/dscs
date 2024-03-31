import React, {useState} from 'react'

export default function TextForm() {
    const [text,setText]=useState('');

    const change=(e)=>{
        setText(e.target.value)
    }

    const clickUpper=()=>{
        setText(text.toUpperCase());
    }

    const clickLower=()=>{
        setText(text.toLowerCase());
    }

    const clickSpeak=()=>{
        var msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }

  return (
    <>
        <div class="my-3 container min-vh-100">
            <h1>Enter your text to analyse</h1>
            <textarea value={text} onChange={change} class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            <div className="my-3 d-flex flex-wrap justify-content-start gap-2">
                <button className="btn btn-primary" onClick={clickUpper}>Upper Case</button>
                <button className="btn btn-primary" onClick={clickLower}>Lower Case</button>
                <button className="btn btn-primary" onClick={clickSpeak}>Speak</button>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{text.split(' ').length-1} Words {text.replace(/\s+/g,'').length} and Character</p>
            </div>
        </div>
        
    </>
  )
}
