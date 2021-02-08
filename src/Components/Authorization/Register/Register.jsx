import React, { Component } from 'react';
import classes from "./css/register.module.css";

class Register extends Component {
   
    render() { 
        return <div>

<div class="shape1_holder">

</div>

<div class="shape2_holder">

</div>

{/* <!-- header --> */}
<div id="menu">
    <div class="menu-logo">
        <img src="img/hpgraph-1.svg" />
    </div>
    <ul class="menu-tab">
        <li class="below 1"> خانه
            <div class="border-bottom"></div>
        </li>
        <li class="below 1"> آموزش</li>
        <li class="below 1"> خدمات</li>
        <li class="below 1"> مالی</li>
        <li class="below 1"> تماس با ما</li>
    </ul>

</div>
<div id="search-holder">
    <input id="search-box" type="search"/>
    <div id="user"></div>
    <p class="little-des"> میان هزاران دوره ی آنلاین</p>
</div>
{/* <!-- form --> */}
{/* <!-- responsive header --> */}
<div class="drop_down">
<div class="back">

</div>
<div class="dropItems sel">خانه</div>
<span class="lineForHome"></span>
<div class="dropItems">آموزش</div>
<div class="dropItems">خدمات</div>
<div class="dropItems">مالی</div>
<div class="dropItems">تماس با ما</div>

<div class="dropItemss"> <img src="img/Work.svg" alt="" class="nahyeKarbari"/>ناحیه کاربری

</div>

</div>
<div class="top_header"> 
    <div class="purse ith">

    </div>

    <div class="header_button ith">

    </div>
</div>
<div class="header_text_holder">
    <div class="header_text">ثبت نام</div>
</div>
    {/* <!-- responsive header --> */}

<div id="form_holder">  
    <div class="formInnerHolder"></div>
        <div class="section1">
            <div class="userNameTextHolder">
                <p class="usernametext">
                    نام و نام خانوادگی
                </p>
            </div>
            <div class="userNameInputHolder1">
                <div class="userNameInputHolder2">

                    <input type="text" placeholder="متین اسماعیلی"/>
                </div>
            </div>
        </div>

        <div class="section2">
            <div class="passWordTextHolder">
                <p class="passwordtext">
                    ایمیل
                </p>
            </div>
            <div class="passWordInputHolder1">
                <div class="passWordInputHolder2">

                    <input class="emailInputInReg" type="text" placeholder="info@bahr.com"/>
                </div>
            </div>

        </div>
        <div class="section3">
            <div class="passWordTextHolder">
                <p class="passwordtext">
                    رمز عبور
                </p>
            </div>
            <div class="passWordInputHolder1">
                <div class="passWordInputHolder2 pwRegister">
                    <div class="showPass1"></div>
                    <input id="shp1" type="password" placeholder="حداقل 8 کاراکتر"/>
                </div>
            </div>

        </div>
        <div class="section4">
            <div class="passWordTextHolder passrepeat">

                <p class="passwordtext">
                    تکرار رمز عبور
                </p>
            </div>
            <div class="passWordInputHolder1">
                <div class="passWordInputHolder2 pwRegister">
                    <div class="showPass2"></div>
                    <input id="shp2" type="password" placeholder="حداقل 8 کاراکتر"/>
                </div>
            </div>

        </div>


        <div class="forgetPass">
            <div class="checkbox">
                <input type="checkbox"/>
            </div>
            <p>مرا به خاطر بسپار</p>
        </div>
        <div class="buttons_holder">
            <a href="login.html">
                <div class="signin">
                    ورود
                </div>
            </a>
            <div class="signup">
                ثبت نام
            </div>

        </div>
    </div>
        </div>
    }
}
 
export default Register;