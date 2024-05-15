import "../styles/Time.css";

export default function Time({ hours, minutes, dst }) {
  const mm = minutes.toString().padStart(2, 0);

  return (
    <h1 className="time">
      {hours}:{mm} {dst && <span>BST</span>}
    </h1>
  );
}
