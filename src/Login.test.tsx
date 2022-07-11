import {
  findByTestId,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import Login from "./Login";
// import LoginProps from "./Login";

describe("<Login />", () => {
  test("should take username, password and then submit values to the handler", () => {
    const handleLogin = jest.fn();
    render(<Login onSubmit={handleLogin} />);
    const username = screen.getByTestId("username");
    const password = screen.getByTestId("password");
    const login = screen.getByTestId("login");
    const user = "testuser";
    const pass = "testpass";
    fireEvent.change(username, { target: { value: user } });
    fireEvent.change(password, { target: { value: pass } });
    fireEvent.click(login);
    expect(handleLogin).toHaveBeenCalledWith(user, pass);
  });
});
