import { useState } from "react";

export default function Accordion({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">0{index}</p>
      <p className="title text">{faq.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && (
        <div className="content-box">
          <p>{faq.text}</p>
        </div>
      )}
    </div>
  );
}
