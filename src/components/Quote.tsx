import RefreshButton from "./RefreshButton.tsx";
import "../styles/Quote.css";

export default function Quote() {
  return (
    <article className="quote">
      <blockquote>
        <p>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </p>
        <footer>Ada Lovelace</footer>
      </blockquote>
      <RefreshButton />
    </article>
  );
}
