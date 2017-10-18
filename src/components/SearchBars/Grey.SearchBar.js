import React from "react";
import ReactDOM from "react-dom";
import styles from "./SearchBar.less";
import classnames from "classnames";

export default class GreySearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.greySearchContainer}>
          <div className={styles.searchBox}>
            <div className={styles.searchIcon}>
              <span>
                <i className={classnames(styles.spriteIconCancel)} />
              </span>
            </div>
            <form>
              <div className={styles.searchInputBox}>
                <input placeholder="搜索" maxLength="20" />
                <a className={styles.searchSubmitBtn} href="#">
                  <i className={classnames(styles.spriteIconSearch)} />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
