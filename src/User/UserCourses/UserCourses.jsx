import React, { Component } from "react";
import "../UserCourses/css/Courses.css";

class UserCourses extends Component {
  state = {};
  render() {
    return (
    <React.Fragment>
   <div class="courses_holder">
        <div class="courses_header">دوره ها</div>
        <div class="itemeholder">
            <div class="items">
                <div class="picholder"></div>
                <div class="sign-btn">
                    <button>ثبت نام</button>
                </div>
                <div class="description">
                    <h2>ریکت مقدماتی تا پیشرفته</h2>
                    <p>مدرس</p>
                    <span class="mentor">آرمین ساکت</span>
                <br/>
                    <span class="price">10,000</span> <span>تومان</span>
                <br/>
                    <span class="rate">4.6</span>
                </div>

            </div>
            <div class="items">
                <div class="picholder"></div>
                <div class="sign-btn">
                    <button>ثبت نام</button>
                </div>
                <div class="description">
                    <h2>ریکت مقدماتی تا پیشرفته</h2>
                    <p>مدرس</p>
                    <span class="mentor">آرمین ساکت</span>
                <br/>
                    <span class="price">10,000</span> <span>تومان</span>
                <br/>
                    <span class="rate">4.6</span>
                </div>

            </div>
            <div class="items">
                <div class="picholder"></div>
                <div class="sign-btn">
                    <button>ثبت نام</button>
                </div>
                <div class="description">
                    <h2>ریکت مقدماتی تا پیشرفته</h2>
                    <p>مدرس</p>
                    <span class="mentor">آرمین ساکت</span>
                <br/>
                    <span class="price">10,000</span> <span>تومان</span>
                <br/>
                    <span class="rate">4.6</span>
                </div>

            </div>
        </div>
    </div>
    </React.Fragment>);
  }
}

export default UserCourses;
