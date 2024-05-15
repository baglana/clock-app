import "./App.css";
import Quote from "./components/Quote";
import Clock from "./components/Clock.tsx";
import MoreButton from "./components/MoreButton.tsx";
import Footer from "./components/Footer.tsx";
import { useCallback, useEffect, useState } from "react";
import { fetchTime } from "./services";
import { TimeBody as TimeType } from "./services/fetchTime/fetchTime.ts";

function App() {
  const [time, setTime] = useState<TimeType>({
    day_of_week: 1,
    day_of_year: 1,
    dst: false,
    week_number: 1,
    timezone: "",
    unixtime: 0,
  });
  const [showMore, setShowMore] = useState(false);

  const newTime = useCallback(async () => {
    try {
      const fetchedTime = await fetchTime();
      if (fetchedTime) {
        setTime(fetchedTime);
      }
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
          <MoreButton showMore={showMore} setShowMore={setShowMore} />
        </main>
      </div>
      {showMore && <Footer time={time} />}
    </>
  );
}

export default App;
