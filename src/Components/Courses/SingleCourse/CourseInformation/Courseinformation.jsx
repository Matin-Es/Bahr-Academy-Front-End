import React, { Component } from "react";
import det from "../css/Courses.module.css";
import { useEffect, useState } from 'react';
import { getCourseId } from "../../../services/api/course/getCourseId";


const CourseId = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadCourses = async () => {
    let address = window.location.href;
    let staticaddress = "http://localhost:3001/Course/";
    // split 
    let newaddress = address.replace(staticaddress, "");
    // console.log(newaddress);
    setLoading(true);
    const result = await getCourseId(newaddress);
    setLoading(false);
    setData(result);
  };

  const ConvertDateHandler = (tarikh) => {
    const dateObj = new Date(tarikh);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    let newdate = year + "/" + month + "/" + day;
    return newdate;
  };

  useEffect(() => {
    loadCourses();
  }, []);

  //console.log(data);
  if(loading){

    return <div>درحال بارگذاری</div>
  }
  if(data == null){
    return <div>همچین درسی وجود ندارد </div>
  }
  return (
    <div className={det["holderdet"]}>
      <div className={det["bookmark"]}>
        <button className={det["bookmarkicon"]}></button>
      </div>
      <div className={det["priceholder"]}>
        <div className={det["itholder"]}>
          <div className={det["it1"]}>قیمت :</div>
          <div className={det["it2"]}>
            <span>{data.cost}</span> تومان
              </div>
        </div>
        <div className={det["signdet"]}>ثبت نام</div>
      </div>
      <div className={det["priceholder"]}>
        <div className={det["itholder"]}>
          <div className={det["it1"]}>دانشجویان دوره : </div>
          <div className={det["it2"]}>
            <span className={det["count"]}>{data.students.length}</span> نفر
              </div>
        </div>
      </div>
      <div className={det["priceholder"]}>
        <div className={"${det.itholder} ${det.det}"}>
          <div className={"${det.it1 ${det.small}"}>تاریخ شروع : </div>
          <div className={"${det.it2} ${small}"}>
             {ConvertDateHandler(data.startDate)}
              </div>
        </div>
        <div className={"${det.itholder} ${det}"}>
          <div className={"${det.it1} ${small}"}>تاریخ پایان : </div>
          <div className={"${det.it2} ${small}"}>
          {ConvertDateHandler(data.endDate)}
          </div>
        </div>
        <div className={"${det.itholder} ${det.det}"}>
          <div className={"${det.it1} ${small}"}>مدرس : </div>
          <div className={"${det.it2} ${small}"}>
            {data.teacher.fullName}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseId;
