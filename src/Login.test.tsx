import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("<Login />", () => {
  test("should take username, password and then submit values to the handler", () => {
    const handleLogin = jest.fn();
    render(<Login onSubmit={handleLogin} />);

    const username = screen.getByTestId("username");
    const user = "testuser";
    fireEvent.change(username, { target: { value: user } });

    const password = screen.getByTestId("password");
    const pass = "testpass";
    fireEvent.change(password, { target: { value: pass } });

    const login = screen.getByTestId("login");
    fireEvent.click(login);

    expect(handleLogin).toHaveBeenCalledWith(user, pass);
  });
});
