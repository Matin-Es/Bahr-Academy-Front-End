import React, { Component } from "react";

//styles
import Classes from '../../User/css/Courses.modules.css'
import ProfileImg from '../../Assets/images/woman-holding-her-head-3280131.png'
class Profile extends Component {
  render() {
    return (
      <div className={Classes.leftprof_holder}>
        <img src={ProfileImg} className={Classes.prfimg} />
        <div className={Classes.blackbg}></div>
        <div className={Classes.editimg}>
          <label className={Classes.getimg} htmlFor=".chngeimg"></label>
          <input className={Classes.chngeimg} type="file" />
        </div>
      </div>
    );
  }
}

export default Profile;
