import React, { Component } from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import {Link} from 'react-router-dom'
//css
import '../css/Courses.css'
import ProfileDetails from "../ProfileDetail/Profile";
class Rightside extends Component {
  render() {
    return (
      <React.Fragment>
        <ProfileDetails />
        <div className="btn-group-vertical btgg"  role="group" aria-label="Vertical button group">
          <button type="button " className="btn btnmenus mb-4 my_cour"><Link to="/Dashboard/Mycourses">دوره های من</Link></button>
          <button type="button" className="btn btnmenus mb-4 singup"><Link to="/Courses">ثبت نام دوره ها</Link></button>
          <button type="button" className="btn btnmenus mb-4 edit"><Link to="/dashboard">ویرایش پروفایل</Link></button>
          <button type="button" className="btn btnmenus mb-4 leave">خروج</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Rightside;
