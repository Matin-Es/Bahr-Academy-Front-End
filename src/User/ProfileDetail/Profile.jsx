import React, { Component } from "react";

//styles
import '../UserCourses/css/Courses.css'
import ProfileImg from '../../Assets/images/woman-holding-her-head-3280131.png'
class Profile extends Component {
  render() {
    return (
      <div className="leftprof_holder">
        <img src={ProfileImg} className="prfimg" />
        <div className="blackbg"></div>
        <div className="editimg">
          <label className="getimg" htmlFor=".chngeimg"></label>
          <input className="chngeimg" type="file" />
        </div>
      </div>
    );
  }
}

export default Profile;
