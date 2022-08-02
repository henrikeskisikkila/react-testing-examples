import { render, screen, fireEvent } from "@testing-library/react";
import VoteButton from "./VoteButton";
import mockThumbsUp from "./images/thumbs-up.svg";

describe("Vote button", () => {
  test("Renders button to screen", () => {
    const mockHandleVote = jest.fn();
    const mockAltText = "vote like";
    render(
      <VoteButton
        handleVote={mockHandleVote}
        hasVoted={false}
        img={mockThumbsUp}
        alt={mockAltText}
      />
    );
    const image = screen.getByRole("img", { name: mockAltText });
    const button = screen.getByRole("button", { name: mockAltText });
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  test("Button click invokes handleVote", () => {
    const mockHandleVote = jest.fn();
    const mockAltText = "vote like";
    render(
      <VoteButton
        handleVote={mockHandleVote}
        hasVoted={false}
        img={mockThumbsUp}
        alt={mockAltText}
      />
    );
    const button = screen.getByRole("button", { name: mockAltText });
    fireEvent.click(button);
    expect(mockHandleVote).toHaveBeenCalled();
    expect(mockHandleVote).toHaveBeenCalledTimes(1);
  });
});
