import React, { Component , Fragment , useEffect, useState} from "react";
import getNews from './../../../Components/services/api/News/getNews';
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

const News = () => {

const [DataNews,setNews] = useState([]);

  const x = async() => {
    let y =await getNews()
    setNews(y)
  }

    const data = {
        columns: [          
            {
                label: 'عنوان خبر',
                field: 'title',
                sort: 'asc',
                width: 150
            },
            {
                label: 'توضیحات',
                field: 'text',
                sort: 'asc',
                width: 270
            },
            {
                label: 'دسته بندی',
                field: 'category',
                sort: 'asc',
                width: 200
            },
            {
                label: 'ویرایش',
                field: 'pos',
                sort: 'asc',
                width: 100
            }
        ],
        
        rows:  DataNews
        ? DataNews.map((News) => ({
            title : News.title,
            text : News.text,
            category : News.category,
           
            pos: (
              <Fragment>
                {/* <Link to={`/edituser/${users._id}`}> */}
                  <button className="btn btn-primary">تغییر</button>
                {/* </Link> */}
                <button
                  className="btn btn-danger"
                  // onClick={() => DeleteUser(users)}
                >
                  حذف
                </button>
               
              </Fragment>
            ),
          }))
        : "",
        
    };
    useEffect(()=>{x()},[])
    return (
        <MDBDataTable
            striped
            bordered
            small
            data={data}
        />
    );
}

export default News;