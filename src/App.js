import './App.css';
import {useState} from "react";

const cards = [
    {author: "unknownUser"},
    {author: "vitia"},
    {author: "coolGuy228"},
    {author: "justAUser"},
]

function App() {
    const [index, setIndex] = useState(0)

    const onButtonClickNext = () => {
        setIndex((index) => {
            if (index === cards.length - 1) {
                return index
            }
            return index + 1
        })
    }

    const onButtonClickPrev = () => {
        setIndex((index) => {
            if (index === 0) {
                return index
            }
            return index - 1})
    }

    const author = cards[index].author

  return (
    <div className="App">
      <div>{author}</div>
        <div>
            <button onClick={onButtonClickPrev}>prev</button>
            <button onClick={onButtonClickNext}>next</button>
        </div>
    </div>
  );
}

export default App;
