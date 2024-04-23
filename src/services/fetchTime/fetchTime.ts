export type TimeBody = {
  day_of_week: number;
  day_of_year: number;
  week_number: number;
  unixtime: number;
};

async function fetchTime() {
  try {
    const res = await fetch("http://worldtimeapi.org/api/ip", {
      cache: "no-cache",
    });
    if (!res.ok) {
      await Promise.reject(
        new Error(`quote fetch error: ${res.status} - ${res.statusText}`),
      );
    }

    const json: TimeBody = await res.json();

    return json;
  } catch (err) {
    console.error("err", err);
  }
}

export default fetchTime;
