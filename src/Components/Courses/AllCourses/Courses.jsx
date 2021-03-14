import React, { Component } from "react";
import { useEffect, useState } from 'react';
import { getCourses } from "../../services/api/course/getCourses";
import det from "./css/det.module.css";
import Header from "../../Header/Header";
import { isYieldExpression } from "typescript";
import { Link,BrowserRouter } from 'react-router-dom';

const Courses = () => {

  const [data, setData] = useState([]);

  const loadCourses = async () => {
    const result = await getCourses();
    setData(result);
  };


  useEffect(() => {
    loadCourses();
  }, []);


  return (

    <div>
      <div className={det.shape1_holder}></div>
      <Header />
      <div className={det["courses_holder"]}>
        <div className={det["courses_header"]}>دوره ها</div>
        <div className={det["itemeholder"]}>
          {data.map((item, index) => 
            <div key={index} className={det["items"]}>
              <div className={det["picholder"]}><img className="coursepic" src={"https://localhost:3000/api/term/getall" + item.course.image} alt={item.course.courseName}></img></div>
              <div className={det["sign-btn"]}>
                <Link to={'/Course/' + item._id} >
                  <button>
                    ثبت نام
                  </button>
                </Link>
              </div>
              <div className={det["description"]}>
                <h2>{item.course.courseName}</h2>
                <p>مدرس</p>
                <span className={det["mentor"]}>{item.teacher.fullName}</span>
                <br />
                <span className={det["price"]}>{item.cost}</span> <span>تومان</span>
                <br />
                <span className={det["rate"]}>4.6</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;