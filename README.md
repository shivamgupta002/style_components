# My React Components Package

This package includes reusable `Button` and `Navbar` components for React applications.

## Installation

To install the package, run:

```bash
npm install styling-with-shivam

Components
Button
A customizable button component.

Usage
jsx
Copy code
import React from "react";
import { Button } from "my-react-components-package";

const App = () => {
  return (
    <div>
      <Button>Click Me!</Button>
    </div>
  );
};

export default App;
Props
children: The content inside the button.
Navbar
A flexible navbar component that supports links, logos, and dropdown menus.

Usage
jsx
Copy code
import React from "react";
import { Navbar } from "my-react-components-package";

const App = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const dropdowns = [
    {
      label: "Services",
      items: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "App Development", href: "/services/app-development" },
      ],
    },
  ];

  return (
    <div>
      <Navbar
        logo={<img src="logo.png" alt="Logo" style={{ height: "40px" }} />}
        links={links}
        dropdowns={dropdowns}
      />
    </div>
  );
};

export default App;
