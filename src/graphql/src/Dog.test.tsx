import { render, screen } from "@testing-library/react";
import Dog from "./Dog";

describe("Dog", () => {
  test("render Dog", () => {
    const values = {
      id: "1",
      name: "Max",
      breed: "Pomeranian",
      photo: "1.jpg",
    };
    render(<Dog {...values} />);
    expect(screen.getByText(values.name)).toBeInTheDocument();
    expect(screen.getByText(values.breed)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
