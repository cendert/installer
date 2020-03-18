import React from "react";
import { css } from "emotion";

const listStyle = css({
  backgroundColor: "cyan",
  margin: 0,
  padding: 0
});

export const List = ({ children }) => <ul className={listStyle}>{children}</ul>;
