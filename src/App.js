import "./App.css";
import { useState } from "react";
import { IMAGE_HEIGHT } from "./config";
import { cards } from "./data";

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

  const { author, img, description } = currentCard;

  return (
    <div className="App">
      <div>
        {author}
        <div className="image" style={{ height: IMAGE_HEIGHT }}>
          <img src={img} alt={author} />
        </div>
      </div>
      {description}
      <div>
        <button onClick={onButtonClickPrev}>prev</button>
        <button onClick={onButtonClickNext}>next</button>
      </div>
    </div>
  );
}

export default App;
