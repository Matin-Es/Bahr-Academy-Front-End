import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useState } from "react";
import { Fragment } from "react";
import { toast } from "react-toastify";
import GetKourses from "../../../Components/services/api/Kourses/GetKourses";
import http from "../../../Components/services/api/http-service.api";
import { Link } from "react-router-dom";
const CourseAdmin = (props) => {
  

  const [kourse, setKourse] = useState([]);

  const x = async () => {
    let y = await GetKourses();
    setKourse(y);
  };
  const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

  const ConvertDateHandler = (date) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    let newdate = year + "/" + month + "/" + day;
    return newdate;
  };

  const DeleteKourse = async (myterm) => {
    const originalPosts = kourse;

    const posts = kourse.filter((p) => p._id !== myterm._id);
    setKourse(posts);
    try {
      await http.delete(MainUrl + "course/" + myterm._id);
      toast.success("   دوره با موفقیت حذف شد");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("این دوره از لیست دوره ها قبلا پاک شده است");
      setKourse(originalPosts);
    }
  };

  const data = {
    columns: [
      {
        label: "نام کورس",
        field: "courseName",
        sort: "asc",
        width: 150,
      },
      {
        label: "توضیحات کورس",
        field: "description",
        sort: "asc",
        width: 270,
      },
      {
        label: "آیدی کورس",
        field: "_id",
        sort: "asc",
        width: 200,
      },
      {
        label: "تاریخ شروع کورس",
        field: "createDate",
        sort: "asc",
        width: 100,
      },
      {
        label: "سر فصل ها",
        field: "topics",
        sort: "asc",
        width: 100,
      },
      {
        label: "ویرایش",
        field: "pos",
        sort: "asc",
        width: 100,
      },
    ],
    rows: kourse
      ? kourse.map((kourses) => ({
          courseName: kourses.courseName,
          description: kourses.description,
          _id: kourses._id,
          createDate: ConvertDateHandler(kourses.createDate),
          topics: kourses.topics,

          pos: (
            <Fragment>

              <Link to={`/admin/kourses/${kourses._id}`}>
              <button className="btn btn-primary">تغییر</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => DeleteKourse(kourses)}
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

export default CourseAdmin;
