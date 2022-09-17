import './App.css';
import {useState} from "react";
import {IMAGE_HEIGHT} from "./config";

const cards = [
    {author: "unknownUser", img: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?cs=srgb&dl=pexels-johann-1254140.jpg&fm=jpg'},
    {author: "vitia", img: "https://images.pexels.com/photos/259772/pexels-photo-259772.jpeg?cs=srgb&dl=pexels-pixabay-259772.jpg&fm=jpg"},
    {author: "coolGuy228", img: 'https://images.pexels.com/photos/1938351/pexels-photo-1938351.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-1938351.jpg&fm=jpg'},
    {author: "justAUser", img: 'https://images.pexels.com/photos/2446439/pexels-photo-2446439.jpeg?cs=srgb&dl=pexels-neha-pandey-2446439.jpg&fm=jpg'},
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

    const currentCard = cards[index]
    const author = currentCard.author
    const src = currentCard.img


  return (
    <div className="App">
      <div>
          {author}
          <div className="image" style={{height: IMAGE_HEIGHT}}>
            <img
                src={src}
                alt={author}
            />
          </div>
      </div>
        <div>
            <button onClick={onButtonClickPrev}>prev</button>
            <button onClick={onButtonClickNext}>next</button>
        </div>
    </div>
  );
}

export default App;
