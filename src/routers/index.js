import React from "react";
import { Router } from "dva/router";
import App from "../components/App/App";
import Test from "../components/test";

const Routers = function({ history, app }) {
  const routes = [
    {
      path: "/",
      component: App,
      //   getIndexRoute(nextState, cb) {
      //     require.ensure(
      //       [],
      //       require => {
      //         cb(null, require("../components/test"));
      //       },
      //       "dashboard"
      //     );
      //   },
      childRoutes: [
        {
          path: "dashboard",
          getComponent(nextState, cb) {
            require.ensure(
              [],
              require => {
                // registerModel(app, require("./models/dashboard"));
                cb(null, require("../components/test"));
              },
              "dashboard"
            );
          }
        }
      ]
    },
    {
      path: "/test",
      name: "test",
      getComponent(nextState, cb) {
        require.ensure([], require => {
            cb(null, require("../components/test"));
        });
      }
    }
  ];

  return <Router history={history} routes={routes} />;
};

export default Routers;
