import AccordionItem from "./AccordionItem";

export default function Accordion() {
  return (
    <div className="flex flex-col w-full gap-4 p-6 mx-auto">
      <AccordionItem title="Sections">
        <ul className="flex flex-col gap-3 p-4 rounded-2xl">
          {[
            "Header",
            "Home",
            "About",
            "Footer",
            "Works",
            "Skills",
            "Contact",
            "Testimonials",
          ].map((item) => (
            <li
              key={item}
              className="p-3 transition border-b-2 hover:bg-border-light text-text-primary-light dark:text-text-primary-dark hover:rounded-xl cursor-grab active:cursor-grabbing"
            >
              {item}
            </li>
          ))}
        </ul>
      </AccordionItem>
    </div>
  );
}
