import React from "react";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import './TextAnimatedForm.css';

function TextAnimatedForm(props){
    const [typeEffect] = useTypewriter({
        words: props.keyWords,
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    });
    return (
        <div>
            <h2 className="text-animated-form-h2">{props.normalWord}<span className="text-animated-form-span">{typeEffect}</span></h2>
        </div>
    );
}

export default TextAnimatedForm;