import { css } from "emotion";

export const mainGridStyle = helperStyles =>
  css([
    ...helperStyles,
    {
      display: "grid",
      gridTemplate: `
  "titlebar titlebar titlebar" minmax(40px,auto)
  "subtitlebar subtitlebar subtitlebar" minmax(40px, auto)
  ". content ." 1fr
  ". wizardnavigationbar ." minmax(40px, auto)
  / 1fr minmax(auto, 992px) 1fr`
    }
  ]);
