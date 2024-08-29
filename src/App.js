import { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInputValue((prevInput) => `${prevInput}${value}`);
  };

  const handleClear = () => {
    setInputValue("");
    setResult("");
  };

  const evaluate = () => {
    try {
      if (inputValue === "") {
        setResult('Error');
      } else {
        const res = eval(inputValue);
        setResult(res);
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='container'>
      <h1>React Calculator</h1>

      <input type='text' className='form-control' value={inputValue} readOnly />

      <div className='result'>{result}</div>

      <div className='btn-container'>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={handleClear}>C</button>

        <button onClick={() => handleClick("0")}>0</button>

        <button onClick={evaluate}>=</button>

        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}

export default App;
