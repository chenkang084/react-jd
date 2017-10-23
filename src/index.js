import React from "react";
import ReactDOM from "react-dom";
import "./styles/global-common.css";
import dva from "dva";
import { browserHistory } from "dva/router";


const app = dva({
  history: browserHistory,
  onError(e) {
    // message.error(e.message, ERROR_MSG_DURATION);
  }
});

app.model(require("./models/app.model").default);

app.router(require("./routers").default);

// 5. Start
app.start("#root");
