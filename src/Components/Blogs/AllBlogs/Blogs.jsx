import React, { Component } from "react";
import classes from "../../Authorization/Login/css/login.module.css";
import Header from "../../Header/Header";
import LastestNews from "../LatestNewsBlogs/LastestNewsblog";
import "./css/Blogs.css";
import getNews from "./../../services/api/News/getNews";
import Pagination from "./../../Courses/AllCourses/Pagination";
import { paginate } from "./../../../utils/paginate";
import { Link, BrowserRouter } from "react-router-dom";

class AllBlogs extends Component {
  state = {
    data: [],
    pageSize: 3,
    currentPage: 1,
  };

  loadNews = async () => {
    const result = await getNews();
    this.setState({ data: result });
  };

  componentDidMount() {
    this.loadNews();
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { pageSize, currentPage, data: Alldata } = this.state;

    const data = paginate(Alldata, currentPage, pageSize);

    if (data.length === 0) return <p className="mt-5">دوره ای وجود ندارد</p>;
    return (
      <div>
        {/* <!-- shapes --> */}
        <div className={classes.shape1_holder}></div>
        <Header />
        <div className="container conts rtl fonts mt65">
          <h1 className="text-center news ness mt-5">خبر ها</h1>
          <div className="row mt-5 px-3">
            {data.map((item, index) => (
              <div className="col-lg-12 bg-white mb-3 blogs-bg h-25">
                <div key={index} className="row p-4">
                  <div className="col-lg-6">
                    <Link to={"/Blog/" + item._id}>
                      <img
                        src={
                          require("../../../Assets/images/Group 350.svg")
                            .default
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-lg-6">
                    <h1 className="mt-5">{item.title}</h1>
                    <h3 className="justify-text mt-3">
                      {item.text + item.text + item.category}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center mt-3">
              {" "}
              <Pagination
                itemsCount={this.state.data.length}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
                className="userCoursePagination"
              />
            </div>
          </div>
          <LastestNews />
        </div>
      </div>
    );
  }
}

export default AllBlogs;
