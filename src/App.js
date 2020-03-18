import React from "react";
import shortid from "shortid";
import "./styles.css";

import {
  Content,
  EnvironmentBar,
  List,
  ListItem,
  Grid,
  SubTitleBar,
  TitleBar,
  WizardNavigationBar
} from "./components";
import { mainGrid } from "./grids";
import { fullscreen } from "./styles";

const environments = [
  {
    id: shortid.generate(),
    description: "JCC-Klantgeleiding_Acceptatie",
    share: "C:\\JCC\\Acceptatie"
  },
  {
    id: shortid.generate(),
    description: "JCC-Klantgeleiding_Test",
    share: "C:\\JCC\\Test"
  },
  {
    id: shortid.generate(),
    description: "ProductieNL",
    share: "C:\\JCC\\Productie"
  }
];

export default function App() {
  return (
    <Grid gridTemplate={mainGrid} helperStyles={[fullscreen]}>
      <TitleBar>hi</TitleBar>
      <SubTitleBar>troll</SubTitleBar>
      <Content>
        <List>
          {environments.map(({ id, description, share }) => (
            <ListItem key={id} listStyle="none">
              <EnvironmentBar>
                {description}
                <br />
                {share}
              </EnvironmentBar>
            </ListItem>
          ))}
        </List>
      </Content>
      <WizardNavigationBar>hi</WizardNavigationBar>
    </Grid>
  );
}
