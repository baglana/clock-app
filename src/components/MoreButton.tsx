import MoreButtonIcon from "./MoreButtonIcon.tsx";
import "../styles/MoreButton.css";

export default function MoreButton() {
  return (
    <button className="more-btn">
      More
      {/*Less*/}
      <MoreButtonIcon />
    </button>
  );
}
