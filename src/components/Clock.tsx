import Greeting from "./Greeting.tsx";
import Time from "./Time.tsx";
import Location from "./Location.tsx";
import "../styles/Clock.css";

export default function Clock({ time }) {
  // const date = new Date(time.unixtime);

  return (
    <article className="clock">
      <Greeting />
      <Time hh={time.getHours()} />
      <Location />
    </article>
  );
}
