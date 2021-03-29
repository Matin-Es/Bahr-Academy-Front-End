import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import { ContextLayout } from "./core/utils/context/Layout";
import VerticalLayout from "./layouts/VerticalLayout";
import "../Admin-Area/index.scss";
import { getItem } from "../Components/services/storage/storage";
import  TermsAdmin  from "../Admin-Area/screens/TermsAdmin/TermsAdmin";
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
          <AppRoute exact path="/admin/courses" component={TermsAdmin}/>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
