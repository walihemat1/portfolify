import { useState } from "react";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden border border-border-light dark:border-border-dark rounded-2xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 bg-card-light dark:bg-card-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none"
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 p-4" : "max-h-0 p-0"
        } overflow-hidden bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark`}
      >
        {children}
      </div>
    </div>
  );
}

export default AccordionItem;
