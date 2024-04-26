import "../styles/MoreButtonIcon.css";

export default function MoreButtonIcon({ showMore }) {
  return showMore ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="16" fill="#303030" />
      <path
        d="M11.2 18.3999L16 13.5999L20.8 18.3999"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="16" fill="#303030" />
      <path
        d="M11.2 13.6001L16 18.4001L20.8 13.6001"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}
