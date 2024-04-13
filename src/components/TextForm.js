import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');

    const change=(e)=>{
        setText(e.target.value)
    }

    const clickUpper=()=>{
        setText(text.toUpperCase());
        props.showAlert("Changed to Upper case","success")
    }
    
    const clickLower=()=>{
        setText(text.toLowerCase());
        props.showAlert("Changed to Lower case","success")
    }

    const clickSpeak=()=>{
        var msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }

  return (
    <div className={`bg-${props.color} text-${props.textColor}`}>
        <div class={`my-3 bg-${props.color} container min-vh-100`}>
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
    </div>
  )
}
