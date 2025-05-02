function Heading({ variant, children }) {
  if (variant === "h2")
    return (
      <h3 className="text-xl font-semibold text-gray-800 dark:text-text-primary-dark">
        {children}
      </h3>
    );

  if (variant === "h3")
    return (
      <h3 className="text-sm font-medium text-gray-800 dark:text-text-primary-light">
        {children}
      </h3>
    );
}

export default Heading;
