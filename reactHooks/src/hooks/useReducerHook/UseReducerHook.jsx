import React from "react";
import { useReducer } from "react";

const initialState = {
  count: 0,
  showCountFlag: true,
};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "substract":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: (state.count = 0),
      };
    case "showcount":
      return {
        ...state,
        showCountFlag: !state.showCountFlag,
      };
    default:
      return state;
  }
}

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <h1>UseReducerHook</h1>
      {state.showCountFlag ? <h1>Count {state.count}</h1> : null}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => dispatch({ type: "add" })}>
          Increase Count
        </button>
        <button onClick={() => dispatch({ type: "substract" })}>
          Decrease Count
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset Count</button>
        <button onClick={() => dispatch({ type: "showcount" })}>
          {
            state.showCountFlag ? "Hide Count": "Show Count"
          }
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
