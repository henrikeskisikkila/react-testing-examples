/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState } from "react";

export interface LoginProps {
  onSubmit: (username: string, password: string) => void;
}

function Login(props: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(username, password);
  };

  const inputStyle = css({
    padding: "0.3em 0.6em",
    margin: "0.6em 0em 1em 0em",
    border: "1px solid #ccc",
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
      <h1>Login</h1>
      <form
        css={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username:</label>
        <input
          css={inputStyle}
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          data-testid="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          css={inputStyle}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password"
        />
        <button css={{ margin: "1em 0em" }} type="submit" data-testid="login">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
