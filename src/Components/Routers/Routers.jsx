import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";

//Pages
import Landing from "../Landing/Landing";
import Blogs from "../Blogs/AllBlogs/Blogs";
import Blog from "../Blogs/SingleBlogs/SingleBlog";
import Courses from "../Courses/AllCourses/Courses";
import Notfound from "../Landing/404/404";
import Course from "../Courses/SingleCourse/SingleCourse";

//user Autthorization
import LoginPage from "../Authorization/Login/Login";
import RegisterPage from "../Authorization/Register/Register";
import ForgetpassPage from "../Authorization/ForgetPass/Forget";

//User Zone
import MyAccount from "../../User/editprofile/Editprofile";
import MyCourses from "../../User/UserCourses/UserCourses";

//
import AdminDash from "../../Admin-Area/MainPage/Admindashboard";
import AdminAllCourses from "../../Admin-Area/CourseAdmin/AllCourses/AllCourses";

class Routers extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Courses" component={Courses} />
          <Route exact path="/Course:id" component={Course} />
          <Route exact path="/Blogs" component={Blogs} />
          <Route exact path="/Blog:id" component={Blog} />
          <Route exact path="/not-found" component={Notfound} />
          {/* user Autthorization */}
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Register" component={RegisterPage} />
          <Route exact path="/Forgetpass" component={ForgetpassPage} />
          {/* end user Autthorization */}
          {/*User Zone*/}
          <Route exact path="/My-Account" component={MyAccount} />
          <Route exact path="/MyCourses" component={MyCourses} />
          {/*End User Zone*/}
          {/*Admin Zone*/}
          <Route exact path="/AdminDashboard" component={AdminDash} />
          <Route exact path="/Admin/AllCourses" component={AdminAllCourses} />
          {/* <Route exact path="/Admin/Blogs" component={} />
            <Route exact path="/Admin/Masters" component={} />

            <Route exact path="/AddCourse" component={} />
            <Route exact path="/AddUser" component={} />
            <Route exact path="/AddBlog" component={} />
            <Route exact path="/AddMaster" component={} />

            <Route exact path="/EditCourse:id" component={} />
            <Route exact path="/EditUser:Id" component={} />
            <Route exact path="/EditBlog:id" component={} />
            <Route exact path="/EditMaster:id" component={} /> */}
          {/*Admin Zone*/}
          <Redirect to="/not-found" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routers;