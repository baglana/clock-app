import GreetingIcon from "./GreetingIcon.tsx";
import "../styles/Greeting.css";

export default function Greeting() {
  return (
    <div className="greeting">
      <GreetingIcon />
      <p>GOOD EVENING</p>
      {/*, it's currently*/}
    </div>
  );
}
