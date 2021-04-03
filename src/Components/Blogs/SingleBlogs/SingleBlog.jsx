import React, { Component } from "react";
import classes from "../../Authorization/Login/css/login.module.css";
import Header from "../../Header/Header";
import LastestNews from "../LatestNewsBlogs/LastestNewsblog";
import "./css/Singleblog.css";
import { useEffect, useState } from "react";
import { getNewsbyId } from "./../../services/api/News/getNewsbyId";

const Singleblog = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    let address = window.location.href;
    let staticaddress = "http://localhost:3001/Blog/";
    // split
    let newaddress = address.replace(staticaddress, "");
    // console.log(newaddress);
    setLoading(true);
    const result = await getNewsbyId(newaddress);
    setLoading(false);
    setData(result);
  };

  useEffect(() => {
    loadNews();
  }, []);

  //console.log(data);
  if (loading) {
    return <div>درحال بارگذاری</div>;
  }
  if (data == null) {
    return <div>همچین درسی وجود ندارد </div>;
  }

  return (
    <div>
      <div className={classes.shape1_holder}></div>
      <Header />
      <div className="container mt-5 fonts rtl">
        <h1 className="text-center news nass">خبر ها</h1>
        <div className="row mt-5 w-100 mx-auto">
          <div className="card col p-4 holder-content new-titles h-50">
            <img
              className="img-fluid content-img mb-4"
              src={require("../../../Assets/images/sali.png").default}
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-text text-justify mb-5 text-p">
                {data.title}
              </h4>
            </div>
          </div>
        </div>
        <LastestNews />
      </div>
    </div>
  );
};

export default Singleblog;
