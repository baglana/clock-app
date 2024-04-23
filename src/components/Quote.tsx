import { useCallback, useEffect, useState } from "react";
import { fetchQuote } from "../services";
import RefreshButton from "./RefreshButton.tsx";
import "../styles/Quote.css";
import { Quote as QuoteType } from "../services/fetchQuote/fetchQuote.ts";

export default function Quote() {
  const [quote, setQuote] = useState<QuoteType>({ author: "", content: "" });

  const newQuote = useCallback(async () => {
    try {
      const fetchedQuote = await fetchQuote();
      if (fetchedQuote) {
        setQuote(fetchedQuote);
      }
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  }, []);

  useEffect(() => {
    newQuote();
  }, [newQuote]);

  return (
    <article className="quote">
      <blockquote>
        <p>“{quote.content}”</p>
        <footer>{quote.author}</footer>
      </blockquote>
      <RefreshButton onClick={newQuote} />
    </article>
  );
}
