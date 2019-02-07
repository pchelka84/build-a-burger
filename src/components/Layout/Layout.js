import React, { Component } from "react";

import Aux from "../../hoc/Auxiliaru";
import classes from "./Layout.css";
import Toolbar from "./../Navigation/Toolbar/Toolbar";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawe: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawe: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawe}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
