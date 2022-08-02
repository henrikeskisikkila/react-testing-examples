import { useState } from "react";

type Credentials = {
  email: string;
  password: string;
};

interface RegisterProps {
  handleRegister: (values: Credentials) => void;
}

function Register(props: RegisterProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    props.handleRegister({ email: email, password: password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          data-testid="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          data-testid="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Register;
