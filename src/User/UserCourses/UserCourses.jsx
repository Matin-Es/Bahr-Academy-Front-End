import React, { Component } from "react";

//styles
import classNamees from "../css/dash.module.css";
import Clas from "../css/Courses.module.css";

//files
import Rightside from "../rightSide/Rightside";
import ProfileDetail from "../ProfileDetail/Profile";
import Shapes from "../../Components/Landing/shapes/shapes";
import Header from "../../Components/Header/Header";

class UserCourses extends Component {
  render() {
    return (
      <React.Fragment>
        <Shapes />
        <Header/>
        <div id={Clas.panel_holder}>
          <Rightside />
          <div className="all-courses-holder">
            <img id={Clas.bell} src={require("../../Assets/images/Group 277.svg").default} />
            <p className={Clas.my_cur}>دوره های من</p>
            <div id={Clas.courses_holder}>
              <ul className={Clas.courses_inf}>
                <li>تصویر</li>
                <li>نام دوره ها</li>
                <li>سطح</li>
                <li>قیمت</li>
                <li>تاریخ آغاز</li>
                <li>وضعیت</li>
              </ul>
              <div className={Clas.sec_cur}>
                <ul className={Clas.items}>
                  <li id={Clas.cur_img}>
                    <img src={require("../../Assets/images/React-icon.svg").default} />
                  </li>
                  <li className={Clas.dore}>ریکت مقدماتی تا پیشرفته</li>
                  <li className={Clas.kargah}>کارگاه</li>
                  <li className={Clas.cash}>تومان 150,000</li>
                  <li className={Clas.tar}>1399/09/18</li>
                  <li className={Clas.vaz}>اتمام دوره</li>
                </ul>

                <ul className={Clas.items}>
                  <li id={Clas.cur_img}>
                  <img src={require("../../Assets/images/React-icon.svg").default} />
                  </li>
                  <li className={Clas.dore}>ریکت مقدماتی تا پیشرفته</li>
                  <li className={Clas.kargah}>کارگاه</li>
                  <li className={Clas.cash}>تومان 150,000</li>
                  <li className={Clas.tar}>1399/09/18</li>
                  <li className={Clas.vaz}>اتمام دوره</li>
                </ul>

                <ul className={Clas.items}>
                  <li id={Clas.cur_img}>
                  <img src={require("../../Assets/images/React-icon.svg").default} />
                  </li>
                  <li className={Clas.dore}>ریکت مقدماتی تا پیشرفته</li>
                  <li className={Clas.kargah}>کارگاه</li>
                  <li className={Clas.cash}>تومان 150,000</li>
                  <li className={Clas.tar}>1399/09/18</li>
                  <li className={Clas.vaz}>اتمام دوره</li>
                </ul>
                <ul className={Clas.items}>
                  <li id={Clas.cur_img}>
                  <img src={require("../../Assets/images/React-icon.svg").default} />
                  </li>
                  <li className={Clas.dore}>ریکت مقدماتی تا پیشرفته</li>
                  <li className={Clas.kargah}>کارگاه</li>
                  <li className={Clas.cash}>تومان 150,000</li>
                  <li className={Clas.tar}>1399/09/18</li>
                  <li className={Clas.vaz}>اتمام دوره</li>
                </ul>
                <ul className={Clas.items}>
                  <li id={Clas.cur_img}>
                  <img src={require("../../Assets/images/React-icon.svg").default} />
                  </li>
                  <li className={Clas.dore}>ریکت مقدماتی تا پیشرفته</li>
                  <li className={Clas.kargah}>کارگاه</li>
                  <li className={Clas.cash}>تومان 150,000</li>
                  <li className={Clas.tar}>1399/09/18</li>
                  <li className={Clas.vaz}>اتمام دوره</li>
                </ul>
                <ul className={Clas.items}>
                  <li id={Clas.cur_img}>
                  <img src={require("../../Assets/images/React-icon.svg").default} />
                  </li>
                  <li className={Clas.dore}>ریکت مقدماتی تا پیشرفته</li>
                  <li className={Clas.kargah}>کارگاه</li>
                  <li className={Clas.cash}>تومان 150,000</li>
                  <li className={Clas.tar}>1399/09/18</li>
                  <li className={Clas.vaz}>اتمام دوره</li>
                </ul>

                <ul className={Clas.items}>
                  <li id={Clas.cur_img}>
                  <img src={require("../../Assets/images/React-icon.svg").default} />
                  </li>
                  <li className={Clas.dore}>ریکت مقدماتی تا پیشرفته</li>
                  <li className={Clas.kargah}>کارگاه</li>
                  <li className={Clas.cash}>تومان 150,000</li>
                  <li className={Clas.tar}>1399/09/18</li>
                  <li className={Clas.vaz}>اتمام دوره</li>
                </ul>
              </div>
              <ul id="next">
                <li className="left">
                  <img src={require("../../Assets/images/Arrow - Left 2.svg").default} />
                </li>
                <li className="page">1</li>
                <li className="right">
                  <img src={require("../../Assets/images/Iconly-Light-Arrow - Right 2.svg").default} />
                </li>
              </ul>
            </div>
            <img id="cart" src={require("../../Assets/images/Group 278.svg").default} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserCourses;
