import React from "react";
import ReactDOM from "react-dom";
import styles from "./Header.less";

console.log(styles);

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div >
          <input type="text" placeholder="搜索" />
        </div>
      </div>
    );
  }
}
