import React, { Component } from "react";
// import classes from "./css/login.module.css";
import classes from "./css/login.module.css";
import resclasses from "./css/responsive_log.module.css";
import {Link} from 'react-router-dom'
import Header from '../../Header/Header'

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={classes.shape1_holder}></div>

        <div className={classes.shape2_holder}></div>

      <Header/>
        <div id={classes["form_holder"]}>
          <div className={classes.formInnerHolder}>
            <div className={classes.section1}>
              <div className={classes.userNameTextHolder}>
                <p className={classes.userNameTextHolder}>ایمیل یا نام کاربری</p>
              </div>
              <div className={classes.userNameInputHolder1}>
                <div className={classes.userNameInputHolder2}>
                  <input type="text" placeholder="info@bahr.com" />
                </div>
              </div>
            </div>

            <div className={classes.section2}>
              <div className={classes.passWordTextHolder}>
                <p className={classes.passwordtext}>رمز عبور</p>
              </div>
              <div className={classes.passWordInputHolder1}>
                <div className={classes.passWordInputHolder2}>
                  <div className={classes.showPass1}></div>
                  <input
                    id={classes.shp1}
                    type="password"
                    placeholder="حداقل 8 کاراکتر"
                  />
                </div>
              </div>
            </div>

            <div className={classes.forgetPass}>
              <div className={classes.exclamation}></div>
              <Link to="/Forgetpass">رمزم رو فراموش کردم!</Link>
            </div>
            <div className={classes["buttons_holder"]}>
              <div className={classes.signin}>ورود</div>
              <Link to="/Register">
                <div className={classes.signup}>ثبت نام</div>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
