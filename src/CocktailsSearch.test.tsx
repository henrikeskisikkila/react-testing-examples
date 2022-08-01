import {
  render,
  screen,
  fireEvent,
  waitFor,
  log,
} from "@testing-library/react";
import CocktailsSearch from "./CocktailsSearch";
import { mockServer } from "./mocks/server";

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

describe("<CocktailsSearch />", () => {
  test("render cocktail mock data", async () => {
    render(<CocktailsSearch />);
    const searchInput = screen.getByTestId("search");
    const query = "mock drick";
    fireEvent.change(searchInput, { target: { value: query } });
    const submit = screen.getByTestId("submit");
    fireEvent.click(submit);
    await screen.findByText("Mock Drink");
    expect(screen.getByText("Mock Drink")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /drink/i })).toBeInTheDocument();
    expect(screen.getByText("Mock Instructions")).toBeInTheDocument();
  });
});
