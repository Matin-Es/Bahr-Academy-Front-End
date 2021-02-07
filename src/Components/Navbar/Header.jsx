import React, { Component } from "react";

import Logo from "../../Assets/images/hpgraph-1.svg";
import './css/login_signup/style.css'
import '../Authorization/Login/css/login.css'
class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="menu">
          <div className="menu-logo">
            <img src={Logo} />
          </div>
          <ul className="menu-tab">
            <li className="below 1">
              {" "}
              خانه
              <div className="border-bottom"></div>
            </li>
            <li className="below 1"> آموزش</li>
            <li className="below 1"> خدمات</li>
            <li className="below 1"> مالی</li>
            <li className="below 1"> تماس با ما</li>
          </ul>
        </div>
        <div id="search-holder">
          <input id="search-box" type="search" />
          <div id="user"></div>
          <p className="little-des"> میان هزاران دوره ی آنلاین</p>
        </div>

        <div className="drop_down">
          <div className="back"></div>
          <div className="dropItems sel">خانه</div>
          <span className="lineForHome"></span>
          <div className="dropItems">آموزش</div>
          <div className="dropItems">خدمات</div>
          <div className="dropItems">مالی</div>
          <div className="dropItems">تماس با ما</div>

          <div className="dropItemss">
            {" "}
            <img src="img/Work.svg" alt="" className="nahyeKarbari" />
            ناحیه کاربری
          </div>
        </div>
        <div className="top_header">
          <div className="purse ith"></div>
          <div className="header_button ith"></div>
        </div>
        <div className="header_text_holder">
          <div className="header_text">ورود</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
