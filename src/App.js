import './App.css';
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)

    const onButtonClickIncrease = () => {
        setCount((count) => count + 1)
    }

    const onButtonClickDecrease = () => {
        setCount((count) => count - 1)
    }
  return (
    <div className="App">
      <div>{count}</div>
        <div>
            <button onClick={onButtonClickDecrease}>decrease</button>
            <button onClick={onButtonClickIncrease}>increase</button>
        </div>
    </div>
  );
}

export default App;
