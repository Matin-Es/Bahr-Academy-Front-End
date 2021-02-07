import React, { Component } from "react";

//styles
import Classes from "../css/dash.module.css";
import Clas from "../css/Courses.module.css";

//files
import Rightside from "../rightSide/Rightside";
import ProfileDetail from "../ProfileDetail/Profile";
import Shapes from "../../Components/Landing/shapes/shapes";
import Header from "../../Components/Navbar/Header";

//images
import Imgsub from "../../Assets/images/Iconly-Light-Tick Square.svg";
class Editprofile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Shapes />
        <div id={Clas.panel_holder}>
          <Rightside />
          <ProfileDetail />
          <div className={Classes.down}>
            <p className={Classes.title}>ویرایش اطلاعات</p>
            <div className={Classes.inputs_holder}>
              <div className={Classes.item}>
                <p>نام</p>
                <input className={Classes.fname} value="sara" type="text" />
              </div>

              <div className={Classes.item}>
                <p>نام خانوادگی</p>
                <input className={Classes.lname} value="بزرگوار" type="text" />
              </div>

              <div className={Classes.item}>
                <p>ایمیل</p>
                <input className={Classes.email} value="ایمیل" type="text" />
              </div>

              <div className={Classes.item}>
                <p>تاریخ تولد</p>
                <input
                  className={Classes.birthdate}
                  value="تاریخ تولد"
                  type="text"
                />
              </div>
            </div>
            <div className={Classes.button_holder}>
              <input className={Classes.cansel} type="button" />
              <div>
                <input
                  className={Classes.sub}
                  value="ثبت تغییرات"
                  type="submit"
                />
                <img className={Classes.true} src={Imgsub} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Editprofile;
