import React from "react";
import ReactDOM from "react-dom";

import { Carousel, WhiteSpace, WingBlank } from "antd-mobile";
import LazyLoadImg from "./LazyLoadImg";
export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    // this.state.imgs = {};
  }

  loadImg(ele) {
    console.log(ele);
    const src = ele.dataset.src;

    setTimeout(() => {
      ele.src = src;
    }, 2000);
  }

  handleImageLoaded() {
    // console.log("..............");
    // const t = ReactDOM.findDOMNode(event.target);
  }

  render() {
    return (
      <div>


        <LazyLoadImg src="https://m.360buyimg.com/mobilecms/s720x322_jfs/t10150/327/1646144323/192159/e1d1f3d8/59e467f8Nad645848.jpg!q70.jpg" />
        <LazyLoadImg src="https://m.360buyimg.com/mobilecms/s720x322_jfs/t10150/327/1646144323/192159/e1d1f3d8/59e467f8Nad645848.jpg!q70.jpg" />
        <LazyLoadImg src="https://m.360buyimg.com/mobilecms/s720x322_jfs/t10150/327/1646144323/192159/e1d1f3d8/59e467f8Nad645848.jpg!q70.jpg" />
        <LazyLoadImg src="https://m.360buyimg.com/mobilecms/s720x322_jfs/t10150/327/1646144323/192159/e1d1f3d8/59e467f8Nad645848.jpg!q70.jpg" />
        <LazyLoadImg src="https://m.360buyimg.com/mobilecms/s720x322_jfs/t10150/327/1646144323/192159/e1d1f3d8/59e467f8Nad645848.jpg!q70.jpg" />
        <LazyLoadImg src="https://m.360buyimg.com/mobilecms/s720x322_jfs/t10150/327/1646144323/192159/e1d1f3d8/59e467f8Nad645848.jpg!q70.jpg" />
      </div>
    );
  }
}
