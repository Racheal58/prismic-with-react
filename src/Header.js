import React from "react";
import { PrismicText, PrismicLink } from "@prismicio/react";

/**
 * Menu link component
 */
const MenuLink = ({ menuLink }) => {
  return (
    <li>
      <PrismicLink field={menuLink.link}>
        <PrismicText field={menuLink.link_label} />
      </PrismicLink>
    </li>
  );
};

/**
 * Site header/nav component
 */
export const Header = ({ menuDoc }) => {
  if (menuDoc) {
    return (
      <nav>
        <ul>
          {menuDoc.data.menu_links.map((menuLink, i) => (
            <MenuLink menuLink={menuLink} key={i} />
          ))}
        </ul>
      </nav>
    );
  }

  return null;
};
