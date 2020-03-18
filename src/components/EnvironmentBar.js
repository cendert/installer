import React from "react";
import { css } from "emotion";

const environmentBarStyle = css({
  backgroundColor: "orchid",
  gridArea: "titlebar",
  margin: "0 0 1rem",
  padding: "1rem"
});

export const EnvironmentBar = ({ children }) => (
  <div className={environmentBarStyle}>{children}</div>
);
