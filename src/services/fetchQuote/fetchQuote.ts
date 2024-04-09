type QuoteBody = [
  {
    // _id: string;
    content: string;
    author: string;
  },
];

async function fetchQuote() {
  const res = await fetch("https://api.quotable.io/quotes/random", {
    cache: "no-cache",
  });
  if (!res.ok) {
    await Promise.reject(
      new Error(`quote fetch error: ${res.status} - ${res.statusText}`),
    );
  }

  const json: QuoteBody = await res.json();

  return json[0];
}

export default fetchQuote;
