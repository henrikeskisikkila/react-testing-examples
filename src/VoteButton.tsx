export interface VoteButtonProps {
  handleVote: () => void;
  hasVoted: boolean | undefined;
  img: string;
  alt: string;
}

const VoteButton = (props: VoteButtonProps) => {
  return (
    <button onClick={props.handleVote} disabled={props.hasVoted}>
      <img src={props.img} alt={props.alt} />
    </button>
  );
};

export default VoteButton;
