import './Caption.css'
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers"
import { useState } from 'react';

const Caption = (props) => {
    const [input, setInput] = useState(props.description)
    const captionChange = (e) => {
        setInput(e.currentTarget.value);
    }
    console.log(222, props.description)
    return <>
    <div className="Caption">{input}</div>
    <input type="text" value={input} onChange={captionChange}/>;
    </>;
}

export default Caption;
