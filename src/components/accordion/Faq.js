import { useState } from "react";

export function Faq({ ask, index }) {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion-faq">
      <div className="accordion-question">
        <div>{ask.question}</div>
        <button className="accordion-button" onClick={() => setShow(!show)}>
          {show ? "-" : "+"}
        </button>
      </div>
      {show && <div className="accordion-answer">{ask.answer}</div>}
    </div>
  );
}
