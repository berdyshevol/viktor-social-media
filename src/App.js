import "./App.css";
import { useState } from "react";
import { cards } from "./data";
import Author from "./components/Author";
import Photo from "./components/Photo";
import Caption from "./components/Caption";

function App() {
  const [index, setIndex] = useState(0);

  const onButtonClickNext = () => {
    setIndex((index) => {
      if (index === cards.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  const onButtonClickPrev = () => {
    setIndex((index) => {
      if (index === 0) {
        return cards.length - 1;
      }
      return index - 1;
    });
  };

  const currentCard = cards[index];

  const { author, img, description, like } = currentCard;

  return (
    <div className="App">
      <Author author={author} />
      <Photo img={img} author={author} />
      <Caption description={description}/>
      {like ? "   +" : "   -"}
      <div className="navigation">
        <button onClick={onButtonClickPrev}>prev</button>
        <button onClick={onButtonClickNext}>next</button>
      </div>
    </div>
  );
}

export default App;
