import Greeting from "./Greeting.tsx";
import Time from "./Time.tsx";
import Location from "./Location.tsx";
import "../styles/Clock.css";

export default function Clock() {
  return (
    <article className="clock">
      <Greeting />
      <Time />
      <Location />
    </article>
  );
}
