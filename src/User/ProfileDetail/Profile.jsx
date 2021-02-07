import React, { Component } from "react";

//styles
import Classes from '../../User/css/Courses.module.css'
import Clas from "../css/dash.module.css";
import ProfileImg from '../../Assets/images/woman-holding-her-head-3280131.png'
class Profile extends Component {
  render() {
    return (
      <div className={Clas.leftprof_holder}>
        <img src={ProfileImg} className={Clas.prfimg} />
        <div className={Clas.blackbg}></div>
        <div className={Clas.editimg}>
          <label className={Clas.getimg} htmlFor=".chngeimg"></label>
          <input className={Clas.chngeimg} type="file" />
        </div>
      </div>
    );
  }
}

export default Profile;
