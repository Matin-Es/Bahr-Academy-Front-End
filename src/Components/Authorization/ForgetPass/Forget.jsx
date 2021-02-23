import React, { Component } from "react";
import classes from "./css/forgetpass.module.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "./css/mdb_for.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdbreact";

class ForgetPass extends Component {
  render() {
    return (
      <div>
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>

        <Header />
        <div className="container">
          <MDBRow>
            <MDBCol md="6 mx-auto md6F">
              <MDBCard className="roundedform cards">
                <MDBCardBody>
                  <form className="ml-1">
                    <p className="h4 text-right usernametext ">ایمیل</p>

                    <input
                      placeholder="info@bahr.com"
                      type="text"
                      id="defaultFormCardNameEx"
                      className="form-control w-75 ml-5 usernameinput px-5 my-3"
                    />

                    <div className="text-center py-1 mt-1">
                      <MDBBtn rounded outline color=" signUp pl-4">
                        بازیابی رمز
                      </MDBBtn>
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

export default ForgetPass;
