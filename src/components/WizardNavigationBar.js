import React from "react";
import { css } from "emotion";

const wizardNavigationBarStyle = css({
  backgroundColor: "orchid",
  gridArea: "wizardnavigationbar"
});

export const WizardNavigationBar = ({ children }) => (
  <div className={wizardNavigationBarStyle}>{children}</div>
);
