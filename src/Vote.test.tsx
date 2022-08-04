import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Vote from "./Vote";

describe("Vote", () => {
  test("increases total votes by one", () => {
    render(<Vote totalVotes={1} />);
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    user.click(screen.getByRole("button", { name: /thumbs up/i }));
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });

  test("decreases total votes by one", () => {
    render(<Vote totalVotes={1} />);
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    user.click(screen.getByRole("button", { name: /thumbs down/i }));
    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  test("a user can vote only once", () => {
    render(<Vote totalVotes={0} />);
    const increaseButton = screen.getByRole("button", { name: /thumbs up/i });
    const decreaseButton = screen.getByRole("button", { name: /thumbs down/i });
    expect(screen.getByText(/0/i)).toBeInTheDocument();
    user.click(increaseButton);
    user.click(increaseButton);
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    user.click(decreaseButton);
    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });
});
