import React, { Component } from "react";
import classes from "./css/register.module.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "./css/mdb_reg.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdbreact";

class Register extends Component {
  render() {
    return (
      <div>
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>

        <Header />

        <div className="container">
          <MDBRow>
            <MDBCol md="6 mx-auto md6R">
              <MDBCard className="roundedform h-100 card">
                <MDBCardBody>
                  <form className="ml-1">
                    <p className="h4 text-right usernametext ">
                      نام و نام خانوادگی{" "}
                    </p>

                    <input
                      placeholder="info@bahr.com"
                      type="text"
                      id="defaultFormCardNameEx"
                      className="form-control w-75 ml-5 usernameinput px-5"
                    />
                   
                    <p className="h4 text-right usernametext ">ایمیل </p>

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
                  
                    <p className="h4 text-right usernametext">تکرار رمز عبور</p>
                    <input
                      placeholder="حداقل 8 کاراکتر"
                      type="password"
                      id="defaultFormCardEmailEx"
                      className="form-control w-75 ml-5 passwordinput px-5"
                    />
                    <div className="forgetPass mt-2" dir="rtl">
                      {" "}
                      <div className="exclamationR">
                        {" "}
                        <input type="checkbox" />
                      </div>
                      مرا به خاطر بسپار
                    </div>
                    <div className="text-center py-4 mt-1">
                      <MDBBtn rounded outline color=" signUpR pl-4">
                        ثبت نام
                      </MDBBtn>
                      <Link className="link" to="/Login">
                        {" "}
                        <MDBBtn rounded outline color=" signInR">
                          ورود
                        </MDBBtn>
                      </Link>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    );
  }
}

export default Register;
