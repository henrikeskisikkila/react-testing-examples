import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increase counter by one", () => {
  render(<Counter />);
  const button = screen.getByTestId("increment");
  fireEvent.click(button);
  const count = screen.getByTestId("count");
  expect(count.innerHTML).toContain("1");
});

test("decrease counter by one", () => {
  render(<Counter />);
  const button = screen.getByTestId("decrement");
  fireEvent.click(button);
  const count = screen.getByTestId("count");
  expect(count.innerHTML).toContain("-1");
});
