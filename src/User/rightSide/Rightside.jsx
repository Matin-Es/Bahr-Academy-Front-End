import React, { Component } from "react";

import Classes from '../css/Courses.module.css'
import '../css/dash.module.css'

import editimg from '../../Assets/images/edit.svg'
class Rightside extends Component {
  render() {
    return (
      <React.Fragment>
         <div id={Classes.right}>
            <div id={Classes.user_inf}>
                <img className={Classes.imgprof}/>
                <div id={Classes.user_name}>
                    <p className={Classes.name}>آرالما</p>
                    <p id={Classes.id}>@aralema</p>
                </div>
                <img className={Classes.editprof} src={editimg}/>
            </div>
            <ul id={Classes.panel_menu}>
                <li className={`${Classes.menu} ${Classes.my_cour}`}>دوره های من</li>
                <li className={`${Classes.menu} ${Classes.singup}`}>ثبت نام دوره ها</li>
                <li className={`${Classes.menu} ${Classes.edit} `}>ویرایش پروفایل</li>
                <li className={`${Classes.menu} ${Classes.leave}`}>خروج</li>
            </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Rightside;
