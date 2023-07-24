export default function Accordion({ faq, index, isOpen, onToggle }) {
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onToggle(index, isOpen)}
    >
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
