import React from "react";

import PublicLayout from "./layout/PublicLayout";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/contactus/ContactUsPage";
// import BookDetailsPage from "./pages/BookDetail/BookDetailsPage";
// import CollectionsPage from "./pages/CollectionDetails/CollectionsPage";
import NotFoundPage from "./pages/NotFoundPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

import { createBrowserHistory } from "history";

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
    path: routes.contact,
    component: ContactUsPage,
    layout: PublicLayout,
  }
];

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
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
