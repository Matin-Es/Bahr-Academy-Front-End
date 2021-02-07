import React, { Component } from "react";

import '../UserCourses/css/Courses.css'
import ProfileImg from ''
class Profile extends Component {
  render() {
    return (
      <div className="leftprof_holder">
        <img src={} className="prfimg" />
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
