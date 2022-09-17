import './App.css';
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)

    const onButtonClick = () => {
        setCount((count) => count + 1)
    }

  return (
    <div className="App">
      <div>{count}</div>
        <div>
            <button onClick={onButtonClick}>click for a surprise</button>
        </div>
    </div>
  );
}

export default App;
