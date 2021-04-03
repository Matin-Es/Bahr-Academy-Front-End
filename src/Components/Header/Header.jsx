import React, { useState } from "react";
import classes from "./css/login.module.css";
import { Link } from "react-router-dom";

//check is log
import { getItem } from "../services/storage/storage";
import { useSpring } from "react-spring";
const Header =(props)=> {
  const [show,setShow] = useState(false);
    const headerBorder ={
      right: props.mgr
    }
    return (
      <React.Fragment>
        {/* <!-- header --> */}

        <div id={classes.menu}>
        <Link to={'/'}>
          <div className={classes["menu-logo"]}>
        
            <img src={require("../../Assets/images/hpgraph-1.svg").default} />
          </div>
          </Link>
          <ul className={classes["menu-tab"]}>
            <li className={`${classes.below} ${classes["1"]}`}>
              {" "}
              <Link to="/">خانه</Link>
              <div
                className={classes["border-bottom"]}
                style={headerBorder}
              ></div>
            </li>
            <li className={`${classes.below} ${classes["1"]}`}>
              <Link to="/Courses">آموزش</Link>
            </li>
            <li className={`${classes.below} ${classes["1"]}`}><Link to="/Blogs">مقالات</Link></li>
            <li className={`${classes.below} ${classes["1"]}`}> مالی</li>
            <li className={`${classes.below} ${classes["1"]}`}> تماس با ما</li>
          </ul>
        </div>
        <div id={classes["search-holder"]}>
          <input id={classes["search-box"]} type="search" />
          
          <Link
            to={
              getItem("token")
                ? "/user/dashboard/" + JSON.parse(getItem("userinf"))._id
                : "/login"
            }
          >
            <div id={classes.user}></div>
          </Link>
          <p className={classes["little-des"]}> میان هزاران دوره ی آنلاین</p>
        </div>
        {/* <!-- form --> */}
        {/* <!-- responsive header --> */}
        <div className={`${classes["drop_down"]} ${show ? classes["disblock"] : classes["disnone"]}`}>
          <div onClick={()=>setShow(false)} className={classes["back"]}></div>
          <Link to={'/'}>
          <div className={`${classes.dropItems} ${classes.sel}`}>خانه</div>
          </Link>
          <span className={classes.lineForHome}></span>
          <Link to={"/Courses"}>
          <div className={classes.dropItems}>آموزش</div>
          </Link>
          <Link to={'/Blogs'}>
          <div className={classes.dropItems}>مقالات</div>
          </Link>
          <div className={classes.dropItems}>مالی</div>
          <div className={classes.dropItems}>تماس با ما</div>

          <div className={classes.dropItemss}>
            {" "}
            <img
              src={require("../../Assets/images/Work.svg").default}
              alt=""
              className="nahyeKarbari"
            />
            ناحیه کاربری
          </div>
        </div>
        <div className={classes["top_header"]}>
          <div className={`${classes.purse} ${classes.ith}`}></div>

          <div onClick={()=> setShow(!show)} className={`${classes["header_button"]} ${classes.ith}`}></div>
        </div>
        {/* <!-- responsive header --> */}
      </React.Fragment>
    );
  }


export default Header;
