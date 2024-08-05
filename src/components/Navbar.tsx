import React, { useState, ReactNode, CSSProperties } from "react";
// import '../styles/Navbar.css';  
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
  backgroundColor?: string;
  textColor?: string;
};

const Navbar = ({
  logo,
  links,
  dropdowns,
  backgroundColor,
  textColor
}: NavbarPropsType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navStyles: CSSProperties = {
    backgroundColor: backgroundColor,
    color: textColor
  };

  return (
    <nav className="nav" style={navStyles}>
      <div className="nav-logo">{logo}</div>
      <button className="nav-toggle" onClick={toggleMenu} style={{ color: textColor }}>
        ☰
      </button>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {links.map((link, index) => (
          <a key={index} href={link.href} className="nav-link" style={{ color: textColor }}>
            {link.label}
          </a>
        ))}
        {dropdowns &&
          dropdowns.map((dropdown, index) => (
            <div key={index} className="nav-dropdown">
              <button className="nav-dropdown-toggle" style={{ color: textColor }}>{dropdown.label}</button>
              <div className="nav-dropdown-menu" style={{ backgroundColor: backgroundColor }}>
                {dropdown.items.map((item, idx) => (
                  <a key={idx} href={item.href} className="nav-dropdown-item" style={{ color: textColor }}>
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
