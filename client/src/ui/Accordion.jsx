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

      <AccordionItem title="Typographies">
        <ul className="flex flex-col gap-3 p-4 rounded-2xl">
          {["H1", "H2", "H3", "H4", "H5", "H6", "P"].map((item) => (
            <li
              key={item}
              className="p-3 transition border-b-2 hover:bg-border-light text-text-primary-light dark:text-text-primary-dark hover:rounded-xl cursor-grab active:cursor-grabbing"
            >
              {item}
            </li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="Elements">
        <ul className="flex flex-col gap-3 p-4 rounded-2xl">
          {["Image", "Anchor", "Button", "List", "Form"].map((item) => (
            <li
              key={item}
              className="p-3 transition border-b-2 hover:bg-border-light text-text-primary-light dark:text-text-primary-dark hover:rounded-xl cursor-grab active:cursor-grabbing"
            >
              {item}
            </li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="Inputs">
        <ul className="flex flex-col gap-3 p-4 rounded-2xl">
          {[
            "Text",
            "Email",
            "Number",
            "Tel",
            "Textarea",
            "Radio",
            "Submit",
            "Checkbox",
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
