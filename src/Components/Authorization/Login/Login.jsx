import React, { Component } from "react";
// import classes from "./css/login.module.css";
import classes from "./css/login.module.css";
import resclasses from "./css/responsive_log.module.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "./css/mdb_log.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdbreact";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>

        <Header />
        <div className="container">
          <MDBRow>
            <MDBCol md="6 mx-auto md6L">
              <MDBCard className="roundedform h-100 card">
                <MDBCardBody>
                  <form className="ml-1">
                    <p className="h4 text-right usernametext ">
                      ایمیل یا نام کاربری
                    </p>

                    <input
                      placeholder="info@bahr.com"
                      type="text"
                      id="defaultFormCardNameEx"
                      className="form-control w-75 ml-5 usernameinput px-5"
                    />
                   
                    <p className="h4 text-right usernametext">رمزعبور</p>
                    <input
                      placeholder="حداقل 8 کاراکتر"
                      type="password"
                      id="defaultFormCardEmailEx"
                      className="form-control w-75 ml-5 passwordinput px-5"
                    />
                    <div className="forgetPass mt-2" dir="rtl">
                      {" "}
                      <div className="exclamation"></div>
                      <Link to="/Forgetpass">رمزم رو فراموش کردم!</Link>
                      
                    </div>
                    <div className="text-center py-4 mt-1">
                    <Link to="/Register">
                      <MDBBtn rounded outline color=" signUpL pl-4">
                       ثبت نام
                      </MDBBtn>
                      </Link>
                      <MDBBtn rounded outline color=" signInL">
                        ورود
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
