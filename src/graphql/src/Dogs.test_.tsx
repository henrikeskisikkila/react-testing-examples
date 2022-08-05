import { render, screen } from "@testing-library/react";
import Dogs from "./Dogs";

describe("Dogs", () => {
  test("render Dogs", () => {
    render(<Dogs />);
  });
});
