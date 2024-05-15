import GreetingIcon from "./GreetingIcon.tsx";
import "../styles/Greeting.css";

export default function Greeting({ hours }) {
  const MORNING = 5;
  const AFTERNOON = 12;
  const EVENING = 18;

  const root = document.querySelector<HTMLElement>("#root");
  if (root) {
    root.className = hours < MORNING || EVENING <= hours ? "dark" : "light";
  }

  const period =
    hours < MORNING || EVENING <= hours
      ? "evening"
      : hours < AFTERNOON
        ? "morning"
        : "afternoon";

  return (
    <div className="greeting">
      {/*
        The sun icon and the daytime background image between 5am and 6pm
        The moon icon and the nighttime background image between 6pm and 5am
      */}
      <GreetingIcon isDay={period !== "evening"} />
      {/*
        "Good morning" between 5am and 12pm
        "Good afternoon" between 12pm and 6pm
        "Good evening" between 6pm and 5am
      */}
      <p>GOOD {period}</p>
      {/*, it's currently*/}
    </div>
  );
}
