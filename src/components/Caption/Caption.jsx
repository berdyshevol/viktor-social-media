import './Caption.css'
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers"

const Caption = (props) => {
    return <div className="Caption">{props.description}</div>;
}

export default Caption;
