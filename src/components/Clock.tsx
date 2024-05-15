import Greeting from "./Greeting.tsx";
import Time from "./Time.tsx";
import Location from "./Location.tsx";
import "../styles/Clock.css";

export default function Clock({ time }) {
  const date = new Date(time.unixtime * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <article className="clock">
      <Greeting hours={hours} />
      <Time hours={hours} minutes={minutes} dst={time.dst} />
      <Location />
    </article>
  );
}
