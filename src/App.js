import React from "react";

import PublicLayout from "./layout/PublicLayout";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/contactus/ContactUsPage";
import TutorsPage from "./pages/tutors/TutorsPage";
import IndividualTutorPage from "./pages/tutors/IndividualTutorPage";
import NotFoundPage from "./pages/NotFoundPage";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

const pages = [
  // Public pages
  {
    exact: true,
    path: routes.home,
    component: HomePage,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: routes.index,
    component: HomePage,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: routes.about,
    component: AboutUsPage,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: routes.tutors,
    component: TutorsPage,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: routes.individualtutor,
    component: IndividualTutorPage,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: routes.contact,
    component: ContactUsPage,
    layout: PublicLayout,
  }
];

const App = () => {

  return (
    <Router>
      <Switch>
        {pages.map(
          (
            { exact, path, component: Component, layout: Layout, props },
            index
          ) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              render={(props) => (
                <Layout history={props.history}>
                  <Component {...props} />
                </Layout>
              )}
            />
          )
        )}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
