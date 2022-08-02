import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./Register";

describe("Registration", () => {
  test("Render Register", () => {
    const mockHandleRegister = jest.fn();
    render(<Register handleRegister={mockHandleRegister} />);
    const user = {
      email: "user@email.com",
      password: "secret",
    };
    const emailInput = screen.getByTestId("email");
    fireEvent.change(emailInput, { target: { value: user.email } });
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: user.password } });
    const button = screen.getByTestId("submit");
    fireEvent.click(button);
    expect(mockHandleRegister).toHaveBeenCalledWith({
      email: user.email,
      password: user.password,
    });
    expect(mockHandleRegister).toHaveBeenCalledTimes(1);
  });
});
