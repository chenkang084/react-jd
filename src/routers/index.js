import React from "react";
import { Router } from "dva/router";

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

function errorLoading(err) {
  console.error("Dynamic page loading failed", err);
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: "/",
      name: "IndexPage",
      getComponent(nextState, cb) {
        System.import("../components/App/App")
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
      childRoutes: [
        {
          path: "/test",
          name: "UsersPage",
          getComponent(nextState, cb) {
            System.import("../components/test")
              .then(loadRoute(cb))
              .catch(errorLoading);
          }
        }
      ]
    }
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
