import React, { Component } from "react";


//styles
import "../css/Courses.css";
import "../css/dash.css";
import "../css/Courses.css";
import EditprofForm from "./form/EditprofileForm";
//images
class Editprofile extends Component {
  // EditprofileForm = () => {
  //   const { register, handleSubmit, errors } = useForm();
  //   onsubmit = (data) => {
  //     console.log(data);
  //   };
  // };
 

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
                className="img-fluid imgheight"
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
          <EditprofForm/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Editprofile;
