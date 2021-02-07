import React, { Component } from "react";

import editimg from '../../Assets/images/edit.svg'
class Rightside extends Component {
  render() {
    return (
      <React.Fragment>
         <div id="right">
            <div id="user_inf">
                <img className="imgprof"/>
                <div id="user_name">
                    <p className="name">آرالما</p>
                    <p id="id">@aralema</p>
                </div>
                <img className="editprof" src={editimg}/>
            </div>
            <ul id="panel_menu">
                <li className="menu my_cour">دوره های من</li>
                <li className="menu singup">ثبت نام دوره ها</li>
                <li className="menu edit">ویرایش پروفایل</li>
                <li className="menu leave">خروج</li>
            </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Rightside;
