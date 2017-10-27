import React from "react";
import { Router, Route, IndexRoute } from "dva/router";
// import Test from "../components/test";
import App from "../components/App/App";
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
        const importModules = Promise.all([
          System.import("../components/App/App")
            .then(loadRoute(cb))
            .catch(errorLoading)
        ]);
      },
      // indexRoute: {
      //   getComponent(nextState, cb) {
      //     Promise.all([
      //       System.import("../models/app2.model"),
      //       System.import("../routers/home/Home.router.js")
      //     ]).then(data => {
      //       app.model(data[0].default || data[0]);
      //       cb(null, data[1].default || data[1]);
      //     });
      //   }
      // },
      childRoutes: [
        {
          path: "/test",
          name: "UsersPage",
          getComponent(nextState, cb) {
            Promise.all([
              System.import("../models/app2.model"),
              // System.import("../components/test")
              // .then(loadRoute(cb))
              // .catch(errorLoading)
            ]).then(data => {
              app.model(data[0].default || data[0]);

              // loadRoute(cb);
              cb(null, data[1].default || data[1]);
            });
          }
        }
      ]
    }
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
