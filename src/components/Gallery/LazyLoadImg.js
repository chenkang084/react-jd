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
      }, 0);
    }
  }

  loadImg(ele) {
    if (ele) {
      setTimeout(() => {
        this.img = ele;
        var seeHeight = document.documentElement.clientHeight; //可见区域高度
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度

        console.log(ele.offsetTop);
        if (ele.offsetTop < seeHeight + scrollTop && !ele.src) {
          ele.src = this.props.src;
        }
      }, 2000);
    }
  }

  test(ele) {
    console.log(ele.offsetTop);
  }

  render() {
    return (
      <div>
        <img
          ref={this.loadImg.bind(this)}
          data-path={this.props.src}
          onLoad={this.handleOnLoad.bind(this)}
          className={classnames(styles.galleryImg, "aysncMaskImg")}
        />
      </div>
    );
  }
}
