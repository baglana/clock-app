import MoreButtonIcon from "./MoreButtonIcon.tsx";
import "../styles/MoreButton.css";

export type MoreButtonProps = {
  showMore: boolean;
  setShowMore: () => void;
};

const MoreButton: React.FC<MoreButtonProps> = ({ showMore, setShowMore }) => {
  function handleClick() {
    setShowMore(!showMore);

    const container = document.querySelector<HTMLElement>(".container");

    container?.classList.toggle("more");
  }

  return (
    <button onClick={handleClick} className="more-btn">
      {showMore ? "Less" : "More"}
      <MoreButtonIcon showMore={showMore} />
    </button>
  );
};

export default MoreButton;
