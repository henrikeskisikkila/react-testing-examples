/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function Login() {
  const inputStyle = css({
    padding: "0.3em 0.6em",
    margin: "0.6em 0em 1em 0em",
    border: "1px solid #ccc",
  });

  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        css={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="username">Username:</label>
        <input css={inputStyle} type="text" name="username" />
        <label htmlFor="password">Password:</label>
        <input css={inputStyle} type="password" name="password" />
        <button css={{ margin: "1em 0em" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
