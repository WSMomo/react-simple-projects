import { useEffect, useState } from "react";

export default function QuoteGenerator() {
  const [data, setData] = useState("");
  const [newQuote, setNewQuote] = useState(0);
  const { content, author } = data;

  useEffect(() => {
    async function fetchQuote() {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      console.log(data.author);
      console.log(data.content);
      setData(data);
    }
    fetchQuote();
  }, [newQuote]);

  function handleNewQuote() {
    setNewQuote(newQuote + 1);
  }

  return (
    <div className="quote-container">
      <h2>{content}</h2>
      <h3 className="quote-generator-author">{author}</h3>
      <button className="quote-button" onClick={handleNewQuote}>
        Generate Quote
      </button>
    </div>
  );
}
