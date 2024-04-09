import "./App.css";
import Quote from "./components/Quote";
import Clock from "./components/Clock.tsx";
import MoreButton from "./components/MoreButton.tsx";
import Footer from "./components/Footer.tsx";
import { useCallback, useEffect, useState } from "react";
import { fetchTime } from "./services";

function App() {
  const [time, setTime] = useState({});

  const newTime = useCallback(async () => {
    try {
      const fetchedTime = await fetchTime();
      setTime(fetchedTime);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  }, []);

  useEffect(() => {
    newTime();
  }, [newTime]);

  return (
    <>
      <div className="container">
        <Quote />
        <main>
          <Clock time={time} />
          <MoreButton />
        </main>
      </div>
      <Footer time={time} />
    </>
  );
}

export default App;
