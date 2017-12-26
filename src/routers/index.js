import React from 'react'
import { Router, Route, IndexRoute } from 'dva/router'
// import Test from "../components/test"
import App from '../components/App/App'
const cached = {}
function registerModel (app, model) {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

function loadRoute (cb) {
  return module => cb(null, module.default)
}

function errorLoading (err) {
  console.error('Dynamic page loading failed', err)
}

function RouterConfig ({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('../components/App/App')
        ]).then(data => {
          cb(null, data[0].default || data[0])
        })
      },
      // 默认子路由
      // indexRoute: {
      //   getComponent(nextState, cb) {
      //     Promise.all([
      //       System.import('../components/NewsReport/NewsReport.js')
      //     ]).then(data => {
      //       cb(null, data[0].default || data[0])
      //     })
      //   }
      // },
      childRoutes: [
        {
          path: '/test',
          name: 'UsersPage',
          getComponent(nextState, cb) {
            Promise.all([
              System.import('../components/NewsReport/NewsReport.js')
            ]).then(data => {
              cb(null, data[0].default || data[0])
            })
          }
        }
      ]
    }
  ]

  return <Router history={history} routes={routes} />
}

export default RouterConfig
