import React, { Component } from "react";
import classes from "./css/register.module.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

class Register extends Component {
  render() {
    return (
      <div>
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>

       <Header/>

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
