import React from "react";
import ReactDOM from "react-dom";
import styles from "./Header.less";
import styles2 from "./Header.scss";
import styles3 from "./Header.css";

console.log(styles);
console.log(styles2);
console.log(styles3);

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="搜索" />
        </div>
      </div>
    );
  }
}
