import * as React from "react";
import { ReactNode } from "react";
import '../styles/Navbar.css';

type LinkType = {
  label: string;
  href: string;
};

type DropdownType = {
  label: string;
  items: LinkType[];
};

type NavbarPropsType = {
  logo: ReactNode;
  links: LinkType[];
  dropdowns?: DropdownType[];
};

const Navbar = ({ logo, links, dropdowns }: NavbarPropsType) => {
  return (
    <nav className="nav">
      <div>{logo}</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            style={{
              color: "white",
              textDecoration: "none",
              padding: "0 10px",
            }}
          >
            {link.label}
          </a>
        ))}
        {dropdowns &&
          dropdowns.map((dropdown, index) => (
            <div key={index} style={{ position: "relative", padding: "0 10px" }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "inherit",
                }}
              >
                {dropdown.label}
              </button>
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "#444",
                  padding: "10px 0",
                  display: "none",
                  flexDirection: "column",
                }}
              >
                {dropdown.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      padding: "5px 20px",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
      </div>
    </nav>
  );
};

export { Navbar };