import React, { Component } from "react";
import classes from "./css/forgetpass.module.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

class ForgetPass extends Component {
  render() {
    return (
      <div>
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>

      <Header/>
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
