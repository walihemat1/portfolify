import { useState } from "react";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-md bg-card-light dark:bg-card-dark">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full p-4 text-text-primary-light dark:text-text-primary-dark focus:outline-none ${
          isOpen ? "border-border-light border-b dark:border-border-dark" : ""
        }`}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto p-4" : "max-h-0 p-0"
        } overflow-hidden  text-text-secondary-light dark:text-text-secondary-dark`}
      >
        {children}
      </div>
    </div>
  );
}

export default AccordionItem;
