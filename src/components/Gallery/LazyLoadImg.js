import React from "react";
import ReactDOM from "react-dom";
import styles from "./Gallery.less";
import classnames from "classnames";

export default class LazyLoadImg extends React.Component {
  constructor(props) {
    super(props);
    this.img;
    this.state = {
      display: false
    };
  }

  handleOnLoad() {
    if (!this.state.display) {
      this.setState({
        display: true
      });

      setTimeout(() => {
        this.img.style.opacity = 1;
        this.img.style.background = "";
      }, 0);
    }
  }

  loadImg(ele) {
    if (ele) {
      setTimeout(() => {
        this.img = ele;
        const seeHeight = document.documentElement.clientHeight; //可见区域高度
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度

        if (ele.offsetTop < seeHeight + scrollTop && !ele.src) {
          ele.src = this.props.src;
        //   ele.dataset.load = "true";
        //   ele.style.background = `url(${ele.dataset.path})`;
        }
      }, 2000);
    }
  }

  render() {
    return (
      <div>
        <img
          ref={this.loadImg.bind(this)}
          data-path={this.props.src}
          data-load={this.state.display}
          onLoad={this.handleOnLoad.bind(this)}
          className={classnames(styles.galleryImg, "aysncMaskImg")}
        />
      </div>
    );
  }
}
