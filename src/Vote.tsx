import { useReducer } from "react";
import VoteButton from "./VoteButton";
import mockThumbsUp from "./images/thumbs-up.svg";
import mockThumbsDown from "./images/thumbs-up.svg";

interface VoteProps {
  totalVotes: number;
}

type VoteState = {
  votes: number;
  hasVoted: boolean;
};

enum Action {
  increment,
  decrement,
}

function voteReducer(state: VoteState, action: Action): VoteState {
  switch (action) {
    case Action.increment:
      return { votes: state.votes + 1, hasVoted: true };
    case Action.decrement:
      return { votes: state.votes - 1, hasVoted: true };
  }
}

function Vote(props: VoteProps) {
  let initial: VoteState = {
    votes: props.totalVotes,
    hasVoted: false,
  };
  const [state, dispatch] = useReducer(voteReducer, initial);
  return (
    <>
      <h1>Vote</h1>
      <VoteButton
        handleVote={() => dispatch(Action.increment)}
        hasVoted={state.hasVoted}
        img={mockThumbsUp}
        alt={"thumbs up"}
      />
      <div>{state.votes}</div>
      <VoteButton
        handleVote={() => dispatch(Action.decrement)}
        hasVoted={state.hasVoted}
        img={mockThumbsDown}
        alt={"thumbs down"}
      />
    </>
  );
}

export default Vote;
