import "../styles/Time.css";

export default function Time({ hh }) {
  return (
    <h1 className="time">
      {hh}:14 <span>BST</span>
    </h1>
  );
}
