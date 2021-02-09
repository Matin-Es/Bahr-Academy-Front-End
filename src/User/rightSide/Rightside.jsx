import React, { Component } from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

//css
import Classes from "../css/Courses.module.css";

import '../css/Courses.css'
//
import ProfileDetails from "../ProfileDetail/Profile";
import editimg from "../../Assets/images/edit.svg";
class Rightside extends Component {
  render() {
    return (
      <React.Fragment>
        <ProfileDetails />
        <div className="btn-group-vertical btgg"  role="group" aria-label="Vertical button group">
          <button type="button " className="btn btnmenus mb-4 my_cour">دوره های من</button>
          <button type="button" className="btn btnmenus mb-4 singup">ثبت نام دوره ها</button>
          <button type="button" className="btn btnmenus mb-4 edit">ویرایش پروفایل</button>
          <button type="button" className="btn btnmenus mb-4 leave">خروج</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Rightside;
