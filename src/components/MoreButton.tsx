import MoreButtonIcon from "./MoreButtonIcon.tsx";
import "../styles/MoreButton.css";
import { useState } from "react";

export default function MoreButton() {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);

    const rootChildren = document.querySelectorAll<HTMLElement>("#root>*");

    rootChildren.forEach((child) => {
      child.classList.toggle("more");
    });
  }

  return (
    <button onClick={handleClick} className="more-btn">
      {showMore ? "Less" : "More"}
      <MoreButtonIcon showMore={showMore} />
    </button>
  );
}
