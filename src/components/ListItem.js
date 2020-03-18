import React from "react";
import { css } from "emotion";

const listItemStyle = (listStyle = "auto") =>
  css({
    backgroundColor: "orchid",
    listStyle
  });

export const ListItem = ({ children, listStyle }) => (
  <li className={listItemStyle(listStyle)}>{children}</li>
);
