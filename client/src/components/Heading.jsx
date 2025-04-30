function Heading({ variant, children }) {
  if (variant === "h2")
    return (
      <h3 className="text-xl font-semibold text-gray-800 ps-3 dark:text-text-primary-dark">
        {children}
      </h3>
    );
}

export default Heading;
