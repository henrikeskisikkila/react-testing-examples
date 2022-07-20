/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useReducer } from "react";

function Counter() {
  const initialState = { count: 0 };

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const itemStyle = css({
    width: "5em",
    margin: "1em",
  });
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1>Counter</h1>
      <h1 data-testid="count">{state.count}</h1>
      <div>
        <button
          onClick={handleDecrement}
          css={itemStyle}
          data-testid="decrement"
        >
          -
        </button>
        <button
          onClick={handleIncrement}
          css={itemStyle}
          data-testid="increment"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
