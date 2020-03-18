import React from "react";
import { css } from "emotion";

const contentStyle = css({
  backgroundColor: "yellow",
  display: "flex",
  flexDirection: "column",
  gridArea: "content",
  padding: "1rem 0"
});

export const Content = ({ children }) => (
  <div className={contentStyle}>{children}</div>
);
