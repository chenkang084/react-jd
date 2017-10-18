import React from "react";
import ReactDOM from "react-dom";
import styles from "./SearchBar.less";
import classnames from "classnames";

export default class RedSearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleScroll(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <div
          id="redSearchContainer"
          className={styles.redSearchContainer}
        >
          <div className={styles.searchBox}>
            <form>
              <div className={styles.searchInputBox}>
                <span className={styles.searchIcon}>
                  <i />
                </span>
                <input placeholder="搜索1" maxLength="20" />
                <a className={styles.searchSubmitBtn} href="#">
                  登陆
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
