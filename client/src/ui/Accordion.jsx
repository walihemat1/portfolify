import AccordionItem from "./AccordionItem";

export default function Accordion() {
  return (
    <div className="max-w-2xl p-6 mx-auto">
      <AccordionItem title="What is DevLink?">
        DevLink is a drag-and-drop portfolio builder that helps developers
        create stylish portfolios without writing code.
      </AccordionItem>
      <AccordionItem title="How does it work?">
        Simply select a template, drag components, customize colors and deploy —
        all from your browser!
      </AccordionItem>
      <AccordionItem title="Is it free?">
        Basic features are free, with optional paid add-ons for advanced
        customization.
      </AccordionItem>
    </div>
  );
}
