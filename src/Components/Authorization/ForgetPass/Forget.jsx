import React, { Component } from "react";
import classes from "./css/forgetpass.module.css";
import { Link } from "react-router-dom";

class ForgetPass extends Component {
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

          <div className={classes.dropItemss}>
            {" "}
            <img
              src={require("../../../Assets/images/Work.svg").default}
              alt=""
              className={classes.nahyeKarbari}
            />
            ناحیه کاربری
          </div>
        </div>
        <div className={classes.top_header}>
          <div className={`${classes.purse} ${classes.ith}`}></div>

          <div className={`${classes.header_button} ${classes.ith}`}></div>
        </div>
        <div className={classes.header_text_holder}>
          <div className={classes.header_text}>فراموشی پسورد</div>
        </div>
        {/* <!-- responsive header --> */}
        <div id={classes["form_holder"]}>
          <div className={classes.formInnerHolder}>
            <div className={classes.section1}>
              <div className={classes.userNameTextHolder}>
                <p className={classes.usernametext}>ایمیل</p>
              </div>
              <div className={classes.userNameInputHolder1}>
                <div className={classes.userNameInputHolder2}>
                  <input type="text" placeholder="info@bahr.com" />
                </div>
              </div>
            </div>

            <div className={classes.buttons_holder}>
              <Link to="#">
                <div className={classes.signin}>بازیابی رمز</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgetPass;
