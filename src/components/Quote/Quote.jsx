import { useEffect, useState } from "react";
import "./Quote.css";
import React from "react";

function Quote() {
  const [quotes, setQuotes] = useState("");
  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="App">
      <div className="quote">
        <p>{quotes.text}</p>
        <p>{quotes.author}</p>

        <div className="btnContainer">
          <button className="btn" onClick={getQuotes}>
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
