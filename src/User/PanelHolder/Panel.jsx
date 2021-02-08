import React, { Component } from "react";

import Rightside from "../rightSide/Rightside";
import Leftside from "../Leftside/leftside";
import "../css/dash.module.css";
import Classes from "../css/Courses.module.css";
import Shape from "../../Components/Landing/shapes/shapes";
class Panel extends Component {
  render() {
    return (
      <React.Fragment>
        <Shape />
        <div className="container mt-5 bg-white" id={Classes.panel_holder}>
          <div className="row">
            <div className="col-lg-9">
              <Leftside />
            </div>
            <div className="col-lg-3" id={Classes.right}>
              <Rightside />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Panel;
