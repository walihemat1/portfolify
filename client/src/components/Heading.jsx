function Heading({ variant, children, styles }) {
  if (variant === "h1")
    return (
      <h1
        className={`${styles} text-xl font-semibold text-gray-800 dark:text-text-primary-dark`}
      >
        {children}
      </h1>
    );

  if (variant === "h2")
    return (
      <h2
        className={`${styles} text-sm font-medium text-gray-800 dark:text-text-primary-light`}
      >
        {children}
      </h2>
    );

  if (variant === "h3")
    return (
      <h3
        className={`${styles} text-xs font-semibold text-gray-500 dark:text-text-primary-light`}
      >
        {children}
      </h3>
    );
}

export default Heading;
