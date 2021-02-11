import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  toast,
  ToastContainer,
} from "mdbreact";

import { useForm } from "react-hook-form";
import "../../css/dash.css";
const EditprofileForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  onsubmit = (data) => {
    console.log(data);
  };
 
  return (
    <form className="needs-validation" onSubmit={handleSubmit(onsubmit)}>
      <MDBRow>
        <MDBCol md="6" className="mb-3">
          <label
            htmlFor="defaultFormRegisterNameEx"
            className="grey-text inputp"
          >
            نام
          </label>
          <input
            ref={register({ required: true, minLength: 3 })}
            name="fname"
            type="text"
            id="defaultFormRegisterNameEx"
            className="form-control changeinput"
            placeholder="نام"
          />
          <div className="displayb">
            {errors.fname &&
              errors.fname.type === "required" &&
              toast.error("فیلد نام را پر کنید", {
                autoClose: true,
              })}
          </div>
          {errors.fname && errors.fname.type === "required" && <p>sad</p>}
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <label
            htmlFor="defaultFormRegisterNameEx"
            className="grey-text inputp"
          >
            نام خانوادگی
          </label>
          <input
            ref={register({ required: true, minLength: 3 })}
            name="lname"
            type="text"
            id="defaultFormRegisterNameEx"
            className="form-control changeinput"
            placeholder="نام خانوادگی"
          />
          <div className="invalid-feedback">فیلد نام خانوادگی را پر کنید</div>
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
            ref={register({ required: true, minLength: 5 })}
            type="text"
            id="defaultFormRegisterPasswordEx4"
            className="form-control changeinput"
            name="city"
            placeholder="ایمیل شما"
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
            ref={register({ required: true })}
            type="text"
            id="defaultFormRegisterPasswordEx4"
            className="form-control changeinput"
            name="ایمیل"
            placeholder="تاریخ تولد شما"
          />
          <div className="invalid-feedback font">
            فیلد تاریخ تولد را پر کنید
          </div>
          <div className="valid-feedback"></div>
        </MDBCol>
      </MDBRow>
      <div className="s">
        <MDBBtn outline color="secondary" className="btn-md font bigg">
          لغو
          <MDBIcon far icon="window-close" className="pr-1" />
        </MDBBtn>
        <MDBBtn gradient="purple" className="btn-md font bigg" type="submit">
          ثبت تغییرات
          <MDBIcon far icon="check-square" className="pr-1" />
        </MDBBtn>
      </div>
      <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        autoClose={5000}
      />
    </form>
  );
};

export default EditprofileForm;
