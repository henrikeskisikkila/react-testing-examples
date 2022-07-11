/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

function Navigation() {
  const links = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "News",
      url: "/",
    },
    {
      text: "Contact",
      url: "/",
    },
  ];

  const linkStyle = {
    display: "block",
    padding: "1em",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "lightgreen",
      backgroundColor: "#555",
    },
  };

  const navItems = links.map((link, index) => (
    <li css={{ float: "left" }} key={index}>
      <a css={linkStyle} href={link.url}>
        {link.text}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul
        css={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "#333",
        }}
      >
        {navItems}
      </ul>
    </nav>
  );
}

export default Navigation;
