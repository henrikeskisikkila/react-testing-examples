import { render, screen } from "@testing-library/react";
import Orders from "./Orders";

const items = [
  {
    id: 1,
    name: "Tomato",
    variety: "Coctail",
    amount: 4,
  },
  {
    id: 2,
    name: "Cucumber",
    variety: "Diva",
    amount: 12,
  },
];

test("renders a table of orders", () => {
  render(<Orders order={items} />);
  expect(screen.getByRole("cell", { name: /tomato/i })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: /coctail/i })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: /4/i })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: /cucumber/i })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: /diva/i })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: /12/i })).toBeInTheDocument();
});
