import React, { Component } from "react";
import { useEffect, useState } from "react";
import { getCourses } from "../../services/api/course/getCourses";
import det from "./css/det.module.css";
import Header from "../../Header/Header";
import { isYieldExpression } from "typescript";
import Pagination from "./Pagination";
import { Link, BrowserRouter } from "react-router-dom";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import reactDom from "react-dom";
import { paginate } from './../../../utils/paginate';


class Courses extends React.Component {
  state = {
    data: [],
    pageSize: 3,
    currentPage:1,
  };
  

  loadCourses = async () => {
    const result = await getCourses();
    this.setState({ data: result });
  };

  componentDidMount() {
    this.loadCourses();
  }
  handlePageChange=(page)=>{
this.setState({currentPage:page});
  }

  
  render() {
  
    const {pageSize,currentPage,data:Alldata}=this.state;


    const data = paginate(Alldata,currentPage,pageSize)
    if (data.length === 0) return <p className="mt-5">دوره ای وجود ندارد</p>;
    return (
      <div>
        
        <div className={det.shape1_holder}></div>
        <Header />
        <div className={det["courses_holder"]}>
          <div className={det["courses_header"]}>دوره ها</div>
          
          <div className={det["itemeholder"]}>
            {data.map((item, index) => (
              <div key={index} className={det["items"]}>
                <div className={det["picholder"]}>
                  <img
                    className="coursepic"
                    src={
                      "https://localhost:3000/api/term/getall" +
                      item.course.image
                    }
                    alt={item.course.courseName}
                  ></img>
                </div>
                <div className={det["sign-btn"]}>
                  <Link to={"/Course/" + item._id}>
                    <button>ثبت نام</button>
                  </Link>
                </div>
                <div className={det["description"]}>
                  <h2>{item.course.courseName}</h2>
                  <p>مدرس</p>
                  <span className={det["mentor"]}>{item.teacher.fullName}</span>
                  <br />
                  <span className={det["price"]}>{item.cost}</span>{" "}
                  <span>تومان</span>
                  <br />
                  <span className={det["rate"]}>4.6</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Pagination
            itemsCount={this.state.data.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
          {/* <MDBRow>
            <MDBCol>
              <MDBPagination circle>
                <MDBPageItem disabled>
                  <MDBPageNav className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem active>
                  <MDBPageNav className="page-link colored">
                    1 <span className="sr-only">(current)</span>
                  </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav className="page-link">2</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav className="page-link">3</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav className="page-link">4</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav className="page-link">5</MDBPageNav>
                </MDBPageItem>
                <MDBPageItem>
                  <MDBPageNav className="page-link">&raquo;</MDBPageNav>
                </MDBPageItem>
              </MDBPagination>
            </MDBCol>
          </MDBRow> */}
        </div>
      </div>
    );
  }
}

export default Courses;
