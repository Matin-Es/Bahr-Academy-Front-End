import React, { Component } from'react';
import det from './css/Courses.module.css';
import Header from '../../Header/Header';

class singleCourse extends Component {
    render() {


        return <div>
            <div className={det.shape1_holder}></div>
            <Header />
            <div id={det["panel_holder"]}>
                <div className={det["leftdet"]}>
                    <div className={det["holderdet"]}>
                        <div className={det["bookmark"]}>
                            <button className={det["bookmarkicon"]}></button>
                        </div>
                        <div className={det["priceholder"]}>
                            <div className={det["itholder"]}>
                                <div className={det["it1"]}>قیمت :</div>
                                <div className={det["it2"]}><span>10,000</span> تومان</div>
                            </div>
                            <div className={det["signdet"]}>ثبت نام</div>
                        </div>
                        <div className={det["priceholder"]}>
                            <div className={det["itholder"]}>
                                <div className={det["it1"]}>دانشجویان دوره : </div>
                                <div className={det["it2"]}><span className={det["count"]}>1240</span> نفر</div>
                            </div>
                        </div>
                        <div className={det["priceholder"]}>
                            <div className={`${det.itholder} ${det.det}`}>
                                <div className={`${det.it1} ${det.small}`}>زمان دوره : </div>
                                <div className={`${det.it2} ${det.small}`}><span className={det["count"]}>5</span> ساعت</div>
                            </div>
                            <div className={`${det.itholder} ${det}`}>
                                <div className={`${det.it1} ${det.small}`}>تاریخ انتشار : </div>
                                <div className={`${det.it2} ${det.small}`}><span className={det["count"]}>5</span> مهر <span className={det["count"]}>1398</span></div>
                            </div>
                            <div className={`${det.itholder} ${det.det}`}>
                                <div className={`${det.it1} ${det.small}`}>بروزرسانی : </div>
                                <div className={`${det.it2} ${det.small}`}><span className={det["count"]}>5</span> مهر <span className={det["count"]}>1398</span></div>
                            </div>
                            <div className={`${det.itholder} ${det.det}`}>
                                <div className={`${det.it1} ${det.small}`}>بازدید : </div>
                                <div className={`${det.it2} ${det.small}`}><span className={det["count"]}>1345</span> بار</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={det["rightdet"]}>
                    <img src={require("../../../Assets/images/pic-det.jpg").default} />
                </div>
            </div>

        </div>
    }
}

export default singleCourse;