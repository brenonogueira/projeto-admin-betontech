/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
  Redirect,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./scss/style.scss";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const token = sessionStorage.getItem("token")
  const rd_auth = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (location?.pathname === "/login" && rd_auth.isLogged) {
      history.push("/ocorrencias");
    }
  }, [location]);


  return (
    <>
      <Switch>
        <React.Suspense fallback={loading}>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/register"
            name="Register Page"
            render={(props) => <Register {...props} />}
          />
          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={(props) => <Page500 {...props} />}
          />
          <ToastContainer autoClose={3000} />
          <Route
            path="/"
            name="Home"
            render={(props) =>
              token ? (
                <TheLayout {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          {/* <Route
            path="/"
            name="Home"
            render={(props) => <TheLayout {...props} />}
          /> */}
        </React.Suspense>
      </Switch>
    </>
  );
};

export default App;
