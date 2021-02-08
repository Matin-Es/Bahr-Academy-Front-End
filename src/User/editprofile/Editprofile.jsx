import React, { Component } from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

//styles
import Classes from "../css/dash.module.css";
import Clas from "../css/Courses.module.css";

//files
import Rightside from "../rightSide/Rightside";
import ProfileDetail from "../ProfileDetail/Profile";
import Shapes from "../../Components/Landing/shapes/shapes";
import Header from "../../Components/Navbar/Header";

//images
import Imgsub from "../../Assets/images/Iconly-Light-Tick Square.svg";
class Editprofile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-6">
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-light">
                <p className="white-text">light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView waves>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="white-text">strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </div>
        <div className="col-lg-6"></div>
      </React.Fragment>
    );
  }
}

export default Editprofile;
