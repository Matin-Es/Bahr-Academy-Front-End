import React, { Component } from "react";

//styles
import '../UserCourses/css/Courses.css'

class Profile extends Component {
  render() {
    return (
      <div classNameName="leftprof_holder">
        <img src="img/woman-holding-her-head-3280131.png" className="prfimg" />
        <div className="blackbg"></div>
        <div className="editimg">
          <label className="getimg" for=".chngeimg"></label>
          <input className="chngeimg" type="file" />
        </div>
      </div>
    );
  }
}

export default Profile;
