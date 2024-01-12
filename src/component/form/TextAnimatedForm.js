import React from "react";
import './TextAnimatedForm.css';

import { useTypewriter, Cursor } from "react-simple-typewriter";

function TextAnimatedForm(props){
    const [typeEffect] = useTypewriter({
        words: props.keyWords,
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    });
    return (
        <div>
            <h2 className="textanimatedform">{props.normalWord}<span className="textanimatedformkeyword">{typeEffect}</span></h2>
        </div>
    );
}

export default TextAnimatedForm;