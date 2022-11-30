import React from "react";
import { PrismicText, PrismicLink } from "@prismicio/react";

/**
 * Menu link component
 */
const MenuLink = ({ menuLink }) => {
  console.log("ds", menuLink);
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
  console.log("ds43", menuDoc);
  if (menuDoc) {
    return (
      <nav>
        <ul>
          {menuDoc.data.menu_links.map((menuLink, i) => (
            <MenuLink menuLink={menuLink} key={i}/>
          ))}
        </ul>
      </nav>
    );
  }

  return null;
};
