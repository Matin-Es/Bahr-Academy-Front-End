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
  toast,
  ToastContainer,
  MDBIcon,
} from "mdbreact";

class Register extends Component {
  state = {
    fname: "",
    email: "",
    password: "",
    confirm_password: "",
    fname: "نام و نام خانوادگی",
    emailtext: "ایمیل",
    passwordtext: "پسورد",
  };

  submitHandler = (event) => {
    event.preventDefault();

    event.target.className += " was-validated";

    toast.error("یک فیلد خالی وجود دارد لطفا آن را پر کنید", {
      rtl: true,
      closeButton: true,
    });
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>

        <Header />

        <div className="container">
          <MDBRow>
            <MDBCol md="6 mx-auto md6R">
              <MDBCard className="roundedform h-100 cards">
                <MDBCardBody>
                  <form
                    className="needs-validation ml-1"
                    onSubmit={this.submitHandler}
                    noValidate
                  >
                    <p className="h4 text-right usernametext ">
                      نام و نام خانوادگی{" "}
                    </p>

                    <input
                      // placeholder="info@bahr.com"
                      // type="text"
                      // id="defaultFormCardNameEx"
                      // className="form-control w-75 ml-5 usernameinput px-5"
                      value={this.state.name}
                      onChange={this.changeHandler}
                      type="text"
                      id="defaultFormRegisterConfirmEx"
                      className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                      name="fname"
                      placeholder="Matin Esmaili"
                      required
                    />
                    <div className="invalid-feedback  invalidfeedbackemail longinvalidtext">
                      لطفا فیلد{this.state.fname} را پر کنید
                    </div>

                    <p className="h4 text-right usernametext ">ایمیل </p>

                    <input
                      // placeholder="info@bahr.com"
                      // type="text"
                      // id="defaultFormCardNameEx"
                      // className="form-control w-75 ml-5 usernameinput px-5"
                      value={this.state.email}
                      onChange={this.changeHandler}
                      type="email"
                      id="defaultFormRegisterConfirmEx2"
                      className="form-control w-75 ml-5 usernameinput px-5"
                      name="email"
                      placeholder="ایمیل خود را وارد کنید"
                      required
                    />
                    <div className="invalid-feedback invalidfeedbackemail">
                      لطفا فیلد{this.state.emailtext} را پر کنید
                    </div>
                    <p className="h4 text-right usernametext">رمزعبور</p>
                    <input
                      value={this.state.password}
                      onChange={this.changeHandler}
                      type="password"
                      id="defaultFormRegisterConfirmEx3"
                      className="form-control w-75 ml-5 passwordinput px-5"
                      name="password"
                      placeholder="حداقل 8 کاراکتر"
                      required
                    />
                    <div className="invalid-feedback invalidfeedbackpass">
                      لطفا فیلد{this.state.passwordtext} را پر کنید
                    </div>

                    <p className="h4 text-right usernametext">تکرار رمز عبور</p>
                    <input
                      value={this.state.x}
                      onChange={this.changeHandler}
                      type="password"
                      id="defaultFormRegisterConfirmEx4"
                      className="form-control w-75 ml-5 mb-4 passwordinput px-5"
                      name="passwordd"
                      placeholder="حداقل 8 کاراکتر"
                      required
                    />
                    <div className="invalid-feedback invalidfeedbackpass">
                      لطفا فیلد{this.state.passwordtext} را پر کنید
                    </div>
                    <div className="forgetPassR mt-2" dir="rtl">
                      {" "}
                      <div className="exclamationR">
                        {" "}
                        <input className="checkbosinput" type="checkbox" />
                      </div>
                      مرا به خاطر بسپار
                    </div>
                    <div className="text-center py-4 mt-1">
                      <MDBBtn
                        type="submit"
                        rounded
                        outline
                        color=" signUpR pl-4"
                      >
                        ثبت نام
                      </MDBBtn>
                      <Link className="link" to="/Login">
                        {" "}
                        <MDBBtn rounded outline color=" signInR">
                          ورود
                        </MDBBtn>
                      </Link>
                    </div>
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      newestOnTop={true}
                      rtl={true}
                    ></ToastContainer>
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
