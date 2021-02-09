import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

//styles
import "../css/Courses.css";
import "../css/dash.css";
//images
class Editprofile extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    city: "",
    state: "",
    zip: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12 px-0">
            <div className="bg-image">
              <img
                src={
                  require("../../Assets/images/woman-holding-her-head-3280131@2x.png")
                    .default
                }
                className="img-fluid"
                alt="Sample"
              />
              <div className="mask blackbge">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <input id="chngeimg" type="file" />
                  <label className="getimg" htmlFor="chngeimg"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mt-4 w-75 mx-auto rtl">
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <MDBRow>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text inputp"
                  >
                    نام
                  </label>
                  <input
                    value=""
                    name="fname"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control changeinput"
                    placeholder="نام"
                    required
                  />
                  <div className="invalid-feedback"></div>
                  <div className="valid-feedback"></div>
                </MDBCol>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text inputp"
                  >
                    نام خانوادگی
                  </label>
                  <input
                    value=""
                    name="fname"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control changeinput"
                    placeholder="نام خانوادگی"
                    required
                  />
                  <div className="invalid-feedback">
                    فیلد نام خانوادگی را پر کنید
                  </div>
                  <div className="invalid-feedback font">
                    فیلد  نام خانوادگی تولد را پر کنید
                  </div>{" "}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text inputp"
                  >
                    ایمیل
                  </label>
                  <input
                    value=""
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control changeinput"
                    name="city"
                    placeholder="ایمیل شما"
                    required
                  />
                  <div className="invalid-feedback font">
                    فیلد ایمیل تولد را پر کنید
                  </div>{" "}
                  <div className="valid-feedback"></div>
                </MDBCol>
                <MDBCol md="6" className="mb-3 ">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text inputp"
                  >
                    تاریخ تولد
                  </label>
                  <input
                    value=""
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control changeinput"
                    name="ایمیل"
                    placeholder="تاریخ تولد شما"
                    required
                  />
                  <div className="invalid-feedback font">
                    فیلد تاریخ تولد را پر کنید
                  </div>
                  <div className="valid-feedback"></div>
                </MDBCol>
              </MDBRow>
              <div className="row">
                <div className="col-3">
                  <button className="btn" type="submit">
                    ثبت تغییرات
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn" type="submit">
                    لغو
                    {/* <MDBIcon far icon="window-close" /> */}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Editprofile;
