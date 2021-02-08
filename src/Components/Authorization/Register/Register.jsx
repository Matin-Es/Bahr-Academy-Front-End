import React, { Component } from "react";
import classes from "./css/register.module.css";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div>
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>

        {/* <!-- header --> */}
        <div id={classes.menu}>
          <div className={classes["menu-logo"]}>
            <img
              src={require("../../../Assets/images/hpgraph-1.svg").default}
            />
          </div>
          <ul className={classes["menu-tab"]}>
            <li className={`${classes.below} ${classes["1"]}`}>
              {" "}
              خانه
              <div className={classes["border-bottom"]}></div>
            </li>
            <li className={`${classes.below} ${classes["1"]}`}> آموزش</li>
            <li className={`${classes.below} ${classes["1"]}`}> خدمات</li>
            <li className={`${classes.below} ${classes["1"]}`}> مالی</li>
            <li className={`${classes.below} ${classes["1"]}`}> تماس با ما</li>
          </ul>
        </div>
        <div id={classes["search-holder"]}>
          <input id={classes["search-box"]} type="search" />
          <div id={classes.user}></div>
          <p className={classes["little-des"]}> میان هزاران دوره ی آنلاین</p>
        </div>
        {/* <!-- form --> */}
        {/* <!-- responsive header --> */}
        <div className={classes["drop_down"]}>
          <div className={classes["back"]}></div>
          <div className={`${classes.dropItems} ${classes.sel}`}>خانه</div>
          <span className={classes.lineForHome}></span>
          <div className={classes.dropItems}>آموزش</div>
          <div className={classes.dropItems}>خدمات</div>
          <div className={classes.dropItems}>مالی</div>
          <div className={classes.dropItems}>تماس با ما</div>

          <div className={classes.dropItems}>
            {" "}
            <img src={require("../../../Assets/images/Work.svg").default} alt="" className="nahyeKarbari" />
            ناحیه کاربری
          </div>
        </div>
        <div className={classes["top_header"]}>
          <div className={`${classes.purse} ${classes.ith}`}></div>

          <div className={`${classes["header_button"]} ${classes.ith}`}></div>
        </div>
        <div className={classes["header_text_holder"]}>
          <div className={classes["header_text"]}>ثبت نام</div>
        </div>
        {/* <!-- responsive header --> */}

        <div id={classes["form_holder"]}>
          <div className={classes.formInnerHolder}></div>
          <div className={classes.section1}>
            <div className={classes.userNameTextHolder}>
              <p className={classes.usernametext}>نام و نام خانوادگی</p>
            </div>
            <div className={classes.userNameInputHolder1}>
              <div className={classes.userNameInputHolder2}>
                <input type="text" placeholder="متین اسماعیلی" />
              </div>
            </div>
          </div>

          <div className={classes.section2}>
            <div className={classes.passWordTextHolder}>
              <p className={classes.passwordtext}>ایمیل</p>
            </div>
            <div className={classes.passWordInputHolder1}>
              <div className={classes.passWordInputHolder2}>
                <input
                  className={classes.emailInputInReg}
                  type="text"
                  placeholder="info@bahr.com"
                />
              </div>
            </div>
          </div>
          <div className={classes.section3}>
            <div className={classes.passWordTextHolder}>
              <p className={classes.passwordtext}>رمز عبور</p>
            </div>
            <div className={classes.passWordInputHolder1}>
              <div className={`${classes["passWordInputHolder2"]} ${classes.pwRegister}`}>
                <div className={classes.showPass1}></div>
                <input
                  id={classes.shp1}
                  type="password"
                  placeholder="حداقل 8 کاراکتر"
                />
              </div>
            </div>
          </div>
          <div className={classes.section4}>
            <div className={`${classes["passWordTextHolder"]} ${classes.passrepeat}`}>
              <p className={classes.passwordtext}>تکرار رمز عبور</p>
            </div>
            <div className={classes.passWordInputHolder1}>
              <div className={`${classes["passWordInputHolder2"]} ${classes.pwRegister}`}>                     
                <div className={classes.showPass2}></div>
                <input
                  id={classes.shp2}
                  type="password"
                  placeholder="حداقل 8 کاراکتر"
                />
              </div>
            </div>
          </div>

          <div className={classes.forgetPass}>
            <div className={classes.forgetPass}>
              <input type="checkbox" />
            </div>
            <p>مرا به خاطر بسپار</p>
          </div>
          <div className={classes.buttons_holder}>
            <Link to="/Login">
              <div className={classes.signin}>ورود</div>
            </Link>
            <div className={classes.signup}>ثبت نام</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
