import React, { Component } from "react";
//styles
import "../../Assets/Styles/panel/Courses.css";
import "../../Assets/Styles/panel/dash.css";
import "../../Assets/Styles/panel/risponsive_courses.css";
import "../../Assets/Styles/panel/risponsive_editprof.css";

//files
import Rightside from "../rightSide/Rightside";
import ProfileDetail from "../ProfileDetail/Profile";
class Editprofile extends Component {
  state = {};
  render() {
    return (
      <div id="panel_holder">
        <Rightside />
        <ProfileDetail />
        <div className="down">
          <p className="title">ویرایش اطلاعات</p>
          <div className="inputs_holder">
            <div className="item a1">
              <p>نام</p>
              <input className="fname" value="sara" type="text" />
            </div>

            <div className="item a2">
              <p>نام خانوادگی</p>
              <input className="lname" value="بزرگوار" type="text" />
            </div>

            <div className="item a1">
              <p>ایمیل</p>
              <input className="email" value="ایمیل" type="text" />
            </div>

            <div className="item a1">
              <p>تاریخ تولد</p>
              <input className="birthdate" value="تاریخ تولد" type="text" />
            </div>
          </div>
          <div className="button_holder">
            <input className="cansel" type="button" />
            <div>
              <input className="sub" value="ثبت تغییرات" type="submit" />
              <img className="true" src="img/Iconly-Light-Tick Square.svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editprofile;
