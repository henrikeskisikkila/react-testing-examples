import { render, screen, fireEvent } from "@testing-library/react";
import { rest } from "msw";
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

  const serviceURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

  test("api service unavailable", async () => {
    mockServer.use(
      rest.get(serviceURL, (req, res, ctx) => {
        return res(ctx.status(503));
      })
    );
    render(<CocktailsSearch />);
    const searchInput = screen.getByTestId("search");
    const query = "mock drick";
    fireEvent.change(searchInput, { target: { value: query } });
    const submit = screen.getByTestId("submit");
    fireEvent.click(submit);
    await screen.findByText("Service unavailable");
  });
});
