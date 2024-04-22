export type Quote = {
  // _id: string;
  content: string;
  author: string;
};

async function fetchQuote() {
  try {
    const res = await fetch("https://api.quotable.io/quotes/random", {
      cache: "no-cache",
    });
    if (!res.ok) {
      await Promise.reject(
        new Error(`quote fetch error: ${res.status} - ${res.statusText}`),
      );
    }

    const json: Quote[] = await res.json();

    return json[0];
  } catch (err) {
    console.error("err", err);
  }
}

export default fetchQuote;
