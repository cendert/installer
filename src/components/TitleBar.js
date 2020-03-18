import React from "react";
import { css } from "emotion";

const titleBarStyle = css({
  backgroundColor: "orchid",
  gridArea: "titlebar"
});

export const TitleBar = ({ children }) => (
  <div className={titleBarStyle}>{children}</div>
);
