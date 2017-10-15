import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import App from "./components/App/App";
import dva from 'dva';
import { browserHistory } from 'dva/router';


// ReactDOM.render(
//   <div>
//     <App />
//   </div>,
//   document.getElementById("root")
// );

const app = dva({
  history: browserHistory,
  onError(e) {
    // message.error(e.message, ERROR_MSG_DURATION);
  },
});

app.router(require('./routers').default);

// 5. Start
app.start('#root');