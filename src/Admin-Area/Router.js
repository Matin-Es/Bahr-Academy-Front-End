import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import { ContextLayout } from "./core/utils/context/Layout";
import VerticalLayout from "./layouts/VerticalLayout";
import "../Admin-Area/index.scss";
import { getItem } from "../Components/services/storage/storage";
import AddKourse from './screens/CourseAdmin/AddKourse';
import EditCourse from './screens/CourseAdmin/EditCourse';
import AdminTerm from './screens/TermsAdmin/TermsAdmin';
import News from './screens/News/News';
import AdminCourse from '../Admin-Area/screens/CourseAdmin/CourseAdmin'
// Route-based code splitting
const Home = lazy(() => import("./screens/Home"));

const Dashboard = lazy(() => import("./screens/Dashboard/Dashboard"));

const AdminUser =  lazy(() => import("./screens/AdminUser"));




// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => {
  const token = getItem("token");

  if (token) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return (
            <ContextLayout.Consumer>
              {(context) => {
                return (
                  <VerticalLayout {...props} permission="admin">
                    <Suspense fallback={<Spinner />}>
                      <Component {...props} />
                    </Suspense>
                  </VerticalLayout>
                );
              }}
            </ContextLayout.Consumer>
          );
        }}
      />
    );
  } else {
    window.location = "/login";
  }
};
// const mapStateToProps = state => {
//   return {
//     user: state.auth.login.userRole
//   }
// }

const AppRoute = RouteConfig;

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute exact path="/Dashboard" component={Dashboard} />
          <AppRoute exact path="/Dashboard/users" component={AdminUser} />
          <AppRoute exact path="/admin/kourses" component={AdminCourse} />
          <AppRoute exact path="/admin/addkourses" component={AddKourse} />
          <AppRoute exact path="/admin/kourses/:_id" component={EditCourse} />
          <AppRoute exact path="/admin/courses" component={AdminTerm} />
          <AppRoute exact path="/admin/blogs" component={News}/>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
