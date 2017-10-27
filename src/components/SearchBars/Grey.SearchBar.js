import React from "react";
import ReactDOM from "react-dom";
import styles from "./SearchBar.less";
import classnames from "classnames";

export default class GreySearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCannel = () => {
    if (this.props.searchRecommend) {
      this.props.handleSearchDisplay(false);
    }
  };

  render() {
    return (
      <div>
        <div
          style={{ display: !this.props.searchRecommend ? "none" : "block" }}
          className={styles.greySearchContainer}
        >
          <div className={styles.searchBox}>
            <div onClick={this.handleCannel} className={styles.searchIcon}>
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

          <div className={styles.hotSearchContainer}>
            <p className={styles.title}>热门搜索：</p>
            <div>
              <a className={styles.hotText}>
                <i>11.11预热</i>
              </a>

              <a className={styles.hotText}>
                <i>家装</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
