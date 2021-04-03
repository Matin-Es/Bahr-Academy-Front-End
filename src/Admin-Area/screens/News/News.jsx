import React, { Component, Fragment, useEffect, useState } from "react";
import getNews from "./../../../Components/services/api/News/getNews";
import Header from "../../../Components/Header/Header";
import { isYieldExpression } from "typescript";
import { Link, BrowserRouter } from "react-router-dom";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBDataTable,
} from "mdbreact";
import reactDom from "react-dom";
import http from "../../../Components/services/api/http-service.api";
import { toast } from "react-toastify";

const News = (props) => {
  const [DataNews, setNews] = useState([]);

  const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

  const DeleteNews = async (webnews) => {
    const originalPosts = DataNews;

    const posts = DataNews.filter((a) => a._id !== webnews._id);
    setNews(posts);
    try {
      await http.delete(MainUrl + "news/" + webnews._id);
      toast.success("   خبر با موفقیت حذف شد");
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error("این خبر از لیست خبر ها قبلا پاک شده است");
      setNews(originalPosts);
    }
  };

  const x = async () => {
    let y = await getNews();
    setNews(y);
  };

  const data = {
    columns: [
      {
        label: "عنوان خبر",
        field: "title",
        sort: "asc",
        width: 150,
      },
      {
        label: "توضیحات",
        field: "text",
        sort: "asc",
        width: 270,
      },
      {
        label: "دسته بندی",
        field: "category",
        sort: "asc",
        width: 200,
      },
      {
        label: "ویرایش",
        field: "pos",
        sort: "asc",
        width: 100,
      },
    ],

    rows: DataNews
      ? DataNews.map((News) => ({
          title: News.title,
          text: News.text,
          category: News.category,

          pos: (
            <Fragment>
              {/* <Link to={`/edituser/${users._id}`}> */}
              <button className="btn btn-primary">تغییر</button>
              {/* </Link> */}
              <button
                className="btn btn-danger"
                onClick={() => DeleteNews(News)}
              >
                حذف
              </button>
            </Fragment>
          ),
        }))
      : "",
  };
  useEffect(() => {
    x();
  }, []);
  return <MDBDataTable striped bordered small data={data} />;
};

export default News;
