// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";

// import { getItem } from "../../Components/services/storage/storage";
// // import Login from "../Authorization/Login/Login";

// // const Dashboard = lazy(() =>
// //   import("./screens/Dashboard/Dashboard")
// // )

// import Dashboard from "./../../Admin-Area/screens/Dashboard/Dashboard";
// import AppRouter from './../../Admin-Area/Router';
// class ProtectedRoute extends Component {
//   state = {
//     redirect: "/Login",
//   };
//   render() {
//     return (
     
        
       
//             {this.props.isLoggedIn || getItem("token") ? (
//               <Route exact path="/Dashboard" component={Dashboard} />
              
//               <AppRoute
//               exact
//               path="/Dashboard/profile"
//               component={Home}
//             />
//             // <AppRoute
//             //   path="/page2"
//             //   component={Page2}
//             // />
//             // <AppRoute
//             //   path="/pages/login"
//             //   component={login}
//             //   fullLayout
//             // />
//             ) 
            
            
//             : (
//               <Redirect to={this.state.redirect} />
//             )}
         
     
//     );
//   }
// }

// export default ProtectedRoute;
