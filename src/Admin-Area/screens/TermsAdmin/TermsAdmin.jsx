import React, { Component , Fragment , useEffect, useState} from "react";
import getCourses from "../../../Components/services/api/course/getCourses";
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


const ConvertDateHandler = (tarikh) => {
    const dateObj = new Date(tarikh);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    let newdate = year + "/" + month + "/" + day;
    return newdate;
  };

const AdminTerm = () => {

//     const [datatable, setData] = useState([]);

//     const loadCourses = async () => {
//         const result = await getCourses();
//         setData(result);
//         console.log(data.res);

//     };


//     useEffect(() => {
//         loadCourses();
//     }, []);

const [DataCourse,setCourse] = useState([]);

  const x = async() => {
    let y =await getCourses()
    setCourse(y)
  }

    const data = {
        columns: [
            {
                label: 'نام',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'ظرفیت',
                field: 'capacity',
                sort: 'asc',
                width: 270
            },
            {
                label: 'نام مدرس',
                field: 'teachername',
                sort: 'asc',
                width: 200
            },
            {
                label: 'دانش آموزان',
                field: 'students',
                sort: 'asc',
                width: 100
            },
            {
                label: 'تاریخ شروع',
                field: 'date',
                sort: 'asc',
                width: 150
            },
            {
                label: 'هزینه',
                field: 'salary',
                sort: 'asc',
                width: 100
            },
            {
                label: 'ویرایش',
                field: 'pos',
                sort: 'asc',
                width: 100
            }
        ],
        
        rows:  DataCourse
        ? DataCourse.map((courses) => ({
            name: courses.course.courseName,
            capacity : courses.capacity,
            teachername: courses.teacher.fullName,
            students : courses.students.length,
            date :  ConvertDateHandler(courses.startDate),
            salary : courses.cost,
        
           
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

export default AdminTerm;