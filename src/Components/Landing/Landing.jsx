import React, { Component } from "react";
//Components
import Footer from "../Footer/Footer";
//Styles
import base from './css/base.module.css';
import content from './css/content.module.css';
import header from './css/header.module.css';
import responsive from './css/responsive.module.css';


class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div id={base["center-holder"]}>
          <div id={header["header"]}>
            <div id={header["menu"]}>
              <div className={header["bahr"]}>Bahr</div>
              <div className={header["menu-logo"]}>
                <img src={require("../../Assets/images/hpgraph-1.svg").default} />
              </div>
              <div className={header["menu-bag"]}></div>
              <ul className={header["menu-tab"]}>
                <div className={header["bahr"]}></div>
                <li className={`${header.below} ${header[1]}`}>
                  خانه
                  <div className={header["border-bottom"]}></div>
                </li>
                <li className={`${header.below} ${header[1]}`}> آموزش</li>
                <li className={`${header.below} ${header[1]}`}> خدمات</li>
                <li className={`${header.below} ${header[1]}`}> مالی</li>
                <li className={`${header.below} ${header[1]}`}> تماس با ما</li>
              </ul>
              <div id={header["search-holder"]}>
                <input id={header["search-box"]} type="search" />
                <div id={header["user"]}></div>
                <p className={header["little-des"]}> میان هزاران دوره ی آنلاین</p>
              </div>
            </div>
            <div id={header["right-skill"]}>
              <p className={header["title-skill"]}>
                مهارت های <strong> جدید </strong> و یادگیری
                <strong> آسان </strong>
              </p>
              <div className={header["border-bottom-skill"]}></div>
              <p className={header["des-skill"]}>
                پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت آموزشی و
                همچنین آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و
                امید داریم بتوانیم با راه کارهای نوین و استفاده از پتانسیل فضای
                مجازی ایجاد فرصت کنیم برای افرادی که خواهان پیشرفت خود و کشورشان
                هستند.
              </p>
              <div className={header["see-curses"]}>
                مشاهده دوره ها
                <img src={require("../../Assets/images/down.svg").default} />
              </div>
            </div>
            <div id={header["left-skill"]}>
              <img className={header["laptop-vector-skill"]} src={require("../../Assets/images/computer.svg").default} />
            </div>
          </div>

          <div id={content["content"]}>
            <div className={content["grouping"]}>
              <p>دسته بندی</p>
              <div className={`${content.group} ${content.math}`}>ریاضی</div>
              <div className={`${content.group} ${content.technology}`}>تکنولوژی</div>
              <div className={`${content.group} ${content.chemistry}`}>شیمی</div>
              <div className={`${content.group} ${content.physics}`}>فیزیک</div>
              <input type="button" value="بیشتر" />
            </div>
            <div className={content["developing"]}>
              <p>دوره های درحال پیشرفت</p>
              <div className={content["right-developing"]}>
                <img src={require("../../Assets/images/alonesit.svg").default} />
              </div>
              <div className={content["left-developing"]}>
                <div className={content["develop"]}>
                  <div className={`${content.back} ${content['-img']} ${content.react}`}>
                    <img src={require("../../Assets/images/React.svg").default} />
                  </div>
                  <h3>ریکت مقدماتی تا پیشرفته </h3>
                  <p className={content["master-develop"]}>آرمین ساکت-رایگان</p>
                  <span className={content["rate-develop"]}>4.6</span>
                </div>
                <div className={content["develop"]}>
                  <div className={`${content.back} ${content['-img']} ${content.html}`}>
                    <div className={`${content.back} ${content['-img']} ${content.html}`}>
                      <img src={require("../../Assets/images/HTML.svg").default} />
                    </div>
                  </div>
                  <h3>مقدماتی تا پیشرفته html </h3>
                  <p className={content["master-develop"]}>آرمین ساکت-رایگان</p>
                  <span className={content["rate-develop"]}>4.6</span>
                </div>
                <div className={`${content.develop} ${content.move}`}>
                  <div className={`${content.back} ${content['-img']} ${content.angular}`}>
                    <div className={`${content.back} ${content['-img']} ${content.angular}`}>
                      <img src={require("../../Assets/images/Angularfull.svg").default} />
                    </div>
                  </div>
                  <h3>انگولار مقدماتی تا پیشرفته </h3>
                  <p className={content["master-develop"]}>آرمین ساکت-رایگان</p>
                  <span className={content["rate-develop"]}>4.6</span>
                </div>
                <div className={`${content.develop} ${content.move}`}>
                  <div className={`${content.back} ${content['-img']} ${content.css}`}>
                    <div className={`${content.back} ${content['-img']} ${content.css}`}>
                      <img src={require("../../Assets/images/css.svg").default} />
                    </div>
                  </div>
                  <h3>مقدماتی تا پیشرفته css </h3>
                  <p className={content["master-develop"]}>آرمین ساکت-رایگان</p>
                  <span className={content["rate-develop"]}>4.6</span>
                </div>
              </div>
            </div>
            <div className={content["go-ahead"]}>
              <p>از همه جلو بزنید</p>
              <div className={content["left-ahead"]}>
                <img src={require("../../Assets/images/lap-left.svg").default} />
              </div>
              <div className={content["right-ahead"]}>
                <h2>عضویت در خبرنامه</h2>
                <p>ایمیل :</p>
                <input
                  id={content["emaill"]}
                  type="email"
                  placeholder="example@domain.com"
                />
                <div className={content["input-circle"]}></div>
              </div>
            </div>
            <div className={content["top-professors"]}>
              <p>اساتید برتر</p>
              <div className={content["all-professors"]}>
                <div className={content["right-side"]}>
                  <div className={`${content.professor} ${content.armin}`}>
                    <img src={require("../../Assets/images/arminpic.svg").default} />
                    <h3>آرمین ساکت</h3>
                    <p>طراح فرانت</p>
                  </div>
                  <div className={`${content.professor} ${content.nazari}`}>
                    <img src={require("../../Assets/images/nazaripic.svg").default} />
                    <h3>حامد نظری</h3>
                    <p>طراح فرانت</p>
                  </div>
                  <div className={`${content.professor} ${content.armin1}`}>
                    <img src={require("../../Assets/images/arminpic.svg").default} />
                    <h3>آرمین ساکت</h3>
                    <p>طراح فرانت</p>
                  </div>
                  <div className={`${content.professor} ${content.nazari1}`}>
                    <img src={require("../../Assets/images/nazaripic.svg").default} />
                    <h3>حامد نظری</h3>
                    <p>طراح فرانت</p>
                  </div>
                </div>
                <div className={content["left-side"]}>
                  <div className={content["big-professor"]}>
                    <img src={require("../../Assets/images/bahrpic.svg").default} />
                    <h3>دکتر محمد حسین بحر العلومی</h3>
                    <h4>مدیریت</h4>
                    <p>
                      مدرس در آموزشگاه، مدرس در دانشگاه علم و فناوری مازندران
                      مستقر در بهشر، مدرس دوره های وب
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={content["suggestions-complaints"]}>
              <p>پیشنهاد و شکایات</p>
              <div className={content["right-complaint"]}>
                <img src={require("../../Assets/images/right-sit-lap.svg").default} />
              </div>
              <div className={content["left-complaint"]}>
                <h2>متن پیام</h2>
                <input
                  id={content["message-text"]}
                  type="text"
                  placeholder="پیام مورد نظر را وارد کنید..."
                />
                <p>ایمیل :</p>
                <input
                  id={content["emaill-2"]}
                  type="email"
                  placeholder="example@domain.com"
                />
                <div className={content["send"]}>ارسال</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
