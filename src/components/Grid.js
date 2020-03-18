import React from "react";
import { css } from "emotion";

const gridStyle = gridTemplate => helperStyles =>
  css([
    ...helperStyles,
    {
      display: "grid",
      gridTemplate
    }
  ]);

export const Grid = ({ children, gridTemplate, helperStyles }) => (
  <div className={gridStyle(gridTemplate)(helperStyles)}>{children}</div>
);
