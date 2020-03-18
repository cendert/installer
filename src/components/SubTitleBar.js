import React from "react";
import { css } from "emotion";

const subTitleBarStyle = css({
  backgroundColor: "cyan",
  gridArea: "subtitlebar"
});

export const SubTitleBar = ({ children }) => (
  <div className={subTitleBarStyle}>{children}</div>
);
