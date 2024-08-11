import { useState } from "react";
import "./App.css";
import github from "../src/assets/github.png";
import linkedin from "../src/assets/linkedin.png";

function App() {
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState([]);

  const handleClick = (e) => {
    const { value } = e.target;
    console.log("input :", value);

    if (value === "Clear") {
      setDisplay("0");
      setOperation("");
      return;
    }

    if (value === "=") {
      try {
        const result = eval(operation);
        setDisplay(result.toString());
        setOperation(result.toString());
      } catch (error) {
        setDisplay("Error");
        setOperation("");
      }
      return;
    }
    const operators = ["+", "-", "*", "/"];

    if (operators.includes(value)) {
      if (operators.includes(operation.slice(-1))) {
        if (value === "-" && operation.slice(-1) !== "-") {
          setOperation((prev) => prev + value);
        } else {
          let newOperation = operation;
          while (operators.includes(newOperation.slice(-1))) {
            newOperation = newOperation.slice(0, -1);
          }
          setOperation(newOperation + value);
        }
      } else {
        setOperation((prev) => prev + value);
      }
      setDisplay((prev) => prev + value);
      return;
    }

    if (value === ".") {
      const lastOperatorIndex = Math.max(
        operation.lastIndexOf("+"),
        operation.lastIndexOf("-"),
        operation.lastIndexOf("*"),
        operation.lastIndexOf("/")
      );
      const lastNumber = operation.slice(lastOperatorIndex + 1);
      if (lastNumber.includes(".")) {
        return;
      }
    }

    setOperation((prev) => (prev === "0" ? value : prev + value));
    setDisplay((prev) => (prev === "0" ? value : prev + value));
  };
  return (
    <>
      <h1 className="text-white-50 font-semibold text-6xl text-center mb-4">
        Calculator Project
      </h1>
      <hr />
      <div
        id="calculator"
        className="border-dotted rounded-lg border-2 border-slate-50 box-content inline-block m-4 p-16"
      >
        <div className="inline-grid grid-cols-4 gap-2 justify-center">
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="seven"
            value="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="eight"
            value="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="nine"
            value="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content bg-slate-200 text-base text-center font-bold text-black hover:text-white"
            id="divide"
            value="/"
            onClick={handleClick}
          >
            /
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="four"
            value="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="five"
            value="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="six"
            value="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content bg-slate-200 text-base text-center font-bold text-black hover:text-white"
            id="multiply"
            onClick={handleClick}
            value="*"
          >
            *
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="one"
            value="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="two"
            value="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="three"
            value="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content bg-slate-200 text-base text-center font-bold text-black hover:text-white"
            id="subtract"
            value="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="zero"
            value="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="decimal"
            onClick={handleClick}
            value="."
          >
            .
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="equals"
            onClick={handleClick}
            value="="
          >
            =
          </button>
          <button
            className="btn btn-circle cursor-pointer w-15 box-content bg-slate-200 text-base text-center font-bold text-black hover:text-white"
            id="add"
            value="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className="btn btn-circle cursor-pointer bg-red-500 w-15 box-content font-semibold text-base hover:bg-slate-500 text-white"
            id="clear"
            value="Clear"
            onClick={handleClick}
          >
            C
          </button>
        </div>
      </div>
      <hr />
      <div
        className="flex flex-1 border-2 rounded-md justify-center border-dashed bg-fuchsia-300 w-full h-40 mt-10 items-center"
        id="display"
      >
        <span className="text-4xl text-gray-900 hover:text-white cursor-none">{display}</span>
      </div>

      <footer className="flex flex-1 items-center justify-center gap-8 mt-20">
        <span>
          © Matias Camba <sup>®</sup>
        </span>
        <a href="https://github.com/MatiasCamba" target="_blank">
          <img src={github} alt="GitHub" className="w-20 h-20" />
        </a>

        <a href="https://www.linkedin.com/in/matiascamba/" target="_blank">
          <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
        </a>
      </footer>
    </>
  );
}

export default App;
