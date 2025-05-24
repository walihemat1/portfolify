import React from "react";

function Heading({ variant, children, styles }) {
  const baseStyles = {
    h1: "text-xl font-semibold",
    h2: "text-sm font-medium",
    h3: "text-xs font-semibold",
  };

  const Tag = variant || "h1";

  return React.createElement(Tag, {
    className: `${baseStyles[variant]} ${styles}`,
    children,
  });
}

export default Heading;
