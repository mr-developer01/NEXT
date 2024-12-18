import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default layout;
