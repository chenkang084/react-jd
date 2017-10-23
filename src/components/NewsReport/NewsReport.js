import React from "react";
import ReactDOM from "react-dom";
import styles from "./NewsReport.less";
import { Carousel, WhiteSpace, WingBlank } from "antd-mobile";

export default class NewsReport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.NewsReportContainer}>
        <a href="https://pro.m.jd.com/mall/active/3vWapAz58pJGYRfNeG88ddfsMM8S/index.html">
          <img className={styles.newsTitle} src="https://st.360buyimg.com/m/images/index/jd-news-tit.png" />
        </a>
        <div className={styles.carousel}>
          <Carousel
            className="my-carousel"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            autoplay
            infinite
          >
            <div className="v-item">News 1</div>
            <div className="v-item">News 2</div>
            <div className="v-item">News 3</div>
          </Carousel>
        </div>
        <a className={styles.more} href="https://pro.m.jd.com/mall/active/3vWapAz58pJGYRfNeG88ddfsMM8S/index.html">
          <span>更多</span>
        </a>
      </div>
    );
  }
}
