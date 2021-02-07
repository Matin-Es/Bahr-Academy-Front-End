import React, { Component } from "react";

import Rightside from "../rightSide/Rightside";
import Profile from "../ProfileDetail/Profile";
import Leftside from "../LeftSide/Leftside";


class Panel extends Component {
  state = {};
  render() {
    return (
      <div id="panel_holder">
        <Rightside />
        <Profile />
        <Leftside />
      </div>
    );
  }
}

export default Panel;