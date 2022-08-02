import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import Register from "./Register";

describe("Registration", () => {
  test("Render Register", () => {
    const mockHandleRegister = jest.fn();
    render(<Register handleRegister={mockHandleRegister} />);
    const mockUser = {
      email: "user@email.com",
      password: "secret",
    };
    const emailInput = screen.getByTestId("email");
    user.type(emailInput, mockUser.email);
    const passwordInput = screen.getByTestId("password");
    user.type(passwordInput, mockUser.password);
    const button = screen.getByTestId("submit");
    user.click(button);
    expect(mockHandleRegister).toHaveBeenCalledWith({
      email: mockUser.email,
      password: mockUser.password,
    });
    expect(mockHandleRegister).toHaveBeenCalledTimes(1);
  });
});
