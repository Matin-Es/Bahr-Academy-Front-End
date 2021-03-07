import React, { Component } from "react";
import { getItem } from "../services/storage/storage";
import { Router, Switch, Route, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Dashboard from "../../User/Panelholder/Panel";
import { history } from './../../Admin-Area/history';



const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = getItem('token');
  console.log(token,rest);
 
 if(token){
   return  <Route {...rest} component={Component} />
 }
 else 
 {
  window.location='/login'
 }
};

// class ProtectedRoute extends Component {
//   state = {
//     Redirect: "/login",
//   };
//   render() {
//     if (token) {
//       return
//       <Router>
//         <Switch>
//           <Route exact path="/User/Dashboard" component={Dashboard} />
//           <Route exact path="/User/dashboard/myCourses" component={Dashboard} />
//         </Switch>
//       </Router>;
//     } else {
//       <Redirect to={this.state.Redirect} />;
//     }
//   }
// }

export default ProtectedRoute;
