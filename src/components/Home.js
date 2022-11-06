import { useReducer } from "react";
import { Link } from "react-router-dom";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  NEW_USER_INPUT: "newUserInput",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.RESET:
      return { ...state, count: (state.count = 0) };
    case ACTION.NEW_USER_INPUT:
      return { ...state, userInput: action.payload };
    default:
      throw new Error();
  }
};

function Home() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <main
      className="App"
      style={{ color: state.color ? "#BF40BF" : "#A020F0." }}
    >
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>
          Increment
        </button>
      </section>
      <p>{state.userInput}</p>
      <a href="./NotFound">Not Found page</a>
    </main>
  );
}

export default Home;
