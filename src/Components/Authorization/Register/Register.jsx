import React, { Component } from "react";
import classes from "./css/register.module.css";
import { Link, Redirect } from "react-router-dom";
import Header from "../../Header/Header";
import "./css/mdb_reg.css";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  ToastContainer,
} from "mdbreact";
import { RegisterUser } from "../../services/api/Auth/Register.api";

class Register extends Component {
  state = {
    fullName: "",
    PhoneNumber: "",
    birthday: "",
    email: "",
    nationalId: "",
    password: "",
    isRegister:false
  };

  submitHandler = (event) => {
    event.preventDefault();

    event.target.className += " was-validated";
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  registerUser = async()=>{
    const userRegister = {
      fullName: this.state.fullName,
      PhoneNumber: this.state.phoneNymber,
      birthday: this.state.birthday,
      email:this.state.email,
      nationalId: this.state.password,
      password: this.state.password
    };
    const RegisterData = await RegisterUser(userRegister);
    this.setState({RegisterData, isRegister:true});
  }
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
                      value={this.state.fullName}
                      onChange={this.changeHandler}
                      type="text"
                      id="defaultFormRegisterConfirmEx"
                      className="form-control w-75 ml-5 mb-4 usernameinput px-5"
                      name="fullName"
                      required
                    />
                    <div className="invalid-feedback  invalidfeedbackemail longinvalidtext">
                      لطفا فیلد{this.state.fullName} را پر کنید
                    </div>

                    <p className="h4 text-right usernametext ">ایمیل </p>

                    <input
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
                      لطفا فیلد{this.state.email} را پر کنید
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
                    <p className="h4 text-right usernametext">شماره موبایل</p>
                    <input
                      value={this.state.PhoneNumber}
                      onChange={this.changeHandler}
                      type="number"
                      id="defaultFormRegisterConfirmEx3"
                      className="form-control w-75 ml-5 passwordinput px-5"
                      name="PhoneNumber"
                      placeholder="حداقل 8 کاراکتر"
                      required
                    />
                    <p className="h4 text-right usernametext">کد ملی</p>
                    <input
                      value={this.state.nationalId}
                      onChange={this.changeHandler}
                      type="number"
                      id="defaultFormRegisterConfirmEx4"
                      className="form-control w-75 ml-5 mb-4 passwordinput px-5"
                      name="nationalId"
                      placeholder="کد ملی"
                      required
                    />

                    <p className="h4 text-right usernametext">سال تولد</p>
                    <input
                      value={this.state.birthday}
                      onChange={this.changeHandler}
                      type="datetime"
                      id="defaultFormRegisterConfirmEx4"
                      className="form-control w-75 ml-5 mb-4 passwordinput px-5"
                      name="birthday"
                      placeholder="حداقل 8 کاراکتر"
                      required
                    />
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
                        onClick={this.registerUser}
                        color=" signUpR pl-4"
                      >
                        {this.state.isRegister ? <Redirect to="/login"/> : ''}
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
