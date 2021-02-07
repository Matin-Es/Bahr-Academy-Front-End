import React, { Component } from "react";

import "./css/login.css";
import "./css/responsive_log.css";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="shape1_holder"></div>

        <div className="shape2_holder"></div>

        {/* <!-- header --> */}

        <div id="menu">
          <div className="menu-logo">
            <img src="img/hpgraph-1.svg" />
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
        {/* <!-- form --> */}
        {/* <!-- responsive header --> */}
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
        {/* <!-- responsive header --> */}
        <div id="form_holder">
          <div className="formInnerHolder">
            <div className="section1">
              <div className="userNameTextHolder">
                <p className="usernametext">ایمیل یا نام کاربری</p>
              </div>
              <div className="userNameInputHolder1">
                <div className="userNameInputHolder2">
                  <input type="text" placeholder="info@bahr.com" />
                </div>
              </div>
            </div>

            <div className="section2">
              <div className="passWordTextHolder">
                <p className="passwordtext">رمز عبور</p>
              </div>
              <div className="passWordInputHolder1">
                <div className="passWordInputHolder2">
                  <div className="showPass1"></div>
                  <input
                    id="shp1"
                    type="password"
                    placeholder="حداقل 8 کاراکتر"
                  />
                </div>
              </div>
            </div>

            <div className="forgetPass">
              <div className="exclamation"></div>
              <a href="forgetpass.html">رمزم رو فراموش کردم!</a>
            </div>
            <div className="buttons_holder">
              <div className="signin">ورود</div>
              <a href="Register.html">
                <div className="signup">ثبت نام</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
