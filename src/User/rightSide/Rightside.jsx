import React, { Component } from "react";

//styles
import '../UserCourses/css/Courses.css'
class Rightside extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Rightside;
