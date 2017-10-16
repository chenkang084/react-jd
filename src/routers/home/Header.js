import React from "react";
import ReactDOM from "react-dom";
import styles from "./Header.less";
import { SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.headerContainer}>
          <input type="text" placeholder="搜索" />
          {/* <SearchBar placeholder="搜索" maxLength={8} /> */}
        </div>
      </div>
    );
  }
}
