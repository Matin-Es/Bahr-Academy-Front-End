import React, { Component } from 'react';
import det from './css/det.module.css';
import Header from '../../Header/Header';

class Courses extends Component {

    render() {
        return <div>
            <div className={det.shape1_holder}></div>
            <Header />
            <div className={det["courses_holder"]}>
                <div className={det["courses_header"]}>دوره ها</div>
                <div className={det["itemeholder"]}>
                    <div className={det["items"]}>
                        <div className={det["picholder"]}></div>
                        <div className={det["sign-btn"]}>
                            <button>ثبت نام</button>
                        </div>
                        <div className={det["description"]}>
                            <h2>ریکت مقدماتی تا پیشرفته</h2>
                            <p>مدرس</p>
                            <span className={det["mentor"]}>آرمین ساکت</span>
                            <br />
                            <span className={det["price"]}>10,000</span> <span>تومان</span>
                            <br />
                            <span className={det["rate"]}>4.6</span>
                        </div>

                    </div>
                    <div className={det["items"]}>
                        <div className={det["picholder"]}></div>
                        <div className={det["sign-btn"]}>
                            <button>ثبت نام</button>
                        </div>
                        <div className={det["description"]}>
                            <h2>ریکت مقدماتی تا پیشرفته</h2>
                            <p>مدرس</p>
                            <span className={det["mentor"]}>آرمین ساکت</span>
                            <br />
                            <span className={det["price"]}>10,000</span> <span>تومان</span>
                            <br />
                            <span className={det["rate"]}>4.6</span>
                        </div>

                    </div>
                    <div className={det["items"]}>
                        <div className={det["picholder"]}></div>
                        <div className={det["sign-btn"]}>
                            <button>ثبت نام</button>
                        </div>
                        <div className={det["description"]}>
                            <h2>ریکت مقدماتی تا پیشرفته</h2>
                            <p>مدرس</p>
                            <span className={det["mentor"]}>آرمین ساکت</span>
                            <br />
                            <span className={det["price"]}>10,000</span> <span>تومان</span>
                            <br />
                            <span className={det["rate"]}>4.6</span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    }
}

export default Courses;