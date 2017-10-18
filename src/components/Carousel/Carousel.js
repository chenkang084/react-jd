import React from "react";
import ReactDOM from "react-dom";
import { Carousel, WhiteSpace, WingBlank } from "antd-mobile";
import "./Carousel.scss";
// import Styles from "./Carousel.less";
// console.log(Styles);
export default class JdCarousel extends React.Component {
  state = {
    data: ["", "", ""],
    initialHeight: 236
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          {
            url:
              "https://pro.m.jd.com/mall/active/31d8r2AM2heMLHHGJ9HycQjJukW7/index.html",
            src:
              "https://m.360buyimg.com/mobilecms/s720x322_jfs/t10150/327/1646144323/192159/e1d1f3d8/59e467f8Nad645848.jpg!q70.jpg",
            alt: "icon"
          },
          {
            url:
              "https://ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9zYWxlLmpkLmNvbS9tL2FjdC9sUVJ6SDh4a0E3SUouaHRtbA&log=EydbvTel20nXtM7y2Scp8i1a_LflpJwQMwkpoN0489GU_QRyIoPHgjJ1QBE1BAsU1EUXwmzs3CoFlSQKXPJfwTgOYm-h8RbS-sI6Vl11mEGmEWY222yvJ6h2sgHVOH7Tf9YFmHdtC0Xgk-RQMe7vZhayfswrSWewO0pezw3k1Yn3MFYfvzgawWeEqL3YPVC5GXeEDS14DoFtu02tpgXreoKSdnwV3cgRq81xusD25OXqOESNmfP3EkunOMOBqXA81lseXkP21aubTKxQMsgRaKxfcG4ksEnPxM3okszzhMJItdNctsKHGeJExlDSmExrpNoFKmvWIUOY8vH51d3p-4gzceameLhe9nm-cceGZCXahCrBQ_pxG5Kg1uuSLMmb&v=404&_=1",
            src:
              "https://img1.360buyimg.com/da/jfs/t10891/172/1645277129/87361/ccd97495/59e45b1cN4f0ed8ec.jpg",
            alt: "icon"
          },
          {
            url:
              "https://ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9zYWxlLmpkLmNvbS9tL2FjdC9Vb0VkM3g4aUR6SWsuaHRtbA&log=EydbvTel20nXtM7y2Scp8i1a_LflpJwQMwkpoN0489F1W4DFd5rMiVKgyjVmW-kZPP-ZxNUbpraSVgiTtoEppM-dwcny6pPbKWOko0NzeC191fSkY-_J9KoTui3wAsxMMCmumKsIAQnWVlsJOxaMhlQcR3Qah7YMg-WCH8O2-OIYmsnYO-i_yMyLv8uXbA9c3YtNU_apSj_NkCKkndN_8kUs6K66VYIxDdZBypIXhZ3RJols9sCxvYSosZShMK1w&v=404&_=1",
            src:
              "https://img1.360buyimg.com/da/jfs/t10393/301/1295056361/100294/6528580f/59df38aeNec62ba7a.jpg",
            alt: "icon"
          },
          {
            url:
              "https://pro.m.jd.com/mall/active/3ADkrCxRdGNbMTf1uBtoBieS1WPw/index.html",
            src:
              "https://m.360buyimg.com/mobilecms/s720x322_jfs/t9538/29/1431019626/120057/8e9a9079/59e08ae8N1bbe5a83.jpg!q70.jpg",
            alt: "icon"
          },
          {
            url:
              "https://ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9wcm8ubS5qZC5jb20vbWFsbC9hY3RpdmUvVW9hUEZiRVVDdEF3YzdRaWJ5Yko2WGdTbkRYL2luZGV4Lmh0bWw&log=EydbvTel20nXtM7y2Scp8i1a_LflpJwQMwkpoN0489F8P_zxLXAmqj0C3jD3_HAw8qM1K5dnSVPoDj4rUa0g163LLm4vqY3gJWRM-0sv0szoYC_IJG6NtUs-UzmXIoyMXzA3Wz5C-v6AZG5D2LJrs40GbGLnoFmtJMvJz3BiPSC7bFR05yFY2aMvsoFwIXRmAlvYDkz68pEPcc5M8uAAE0-OvUdhP0wb8Cq58nUHBYToNjNjE4h5Dff59gczDm9Q&v=404&_=1",
            src:
              "https://img1.360buyimg.com/da/jfs/t9577/176/1712803315/98166/81d938ba/59e5653aN96c245b5.jpg",
            alt: "icon"
          },
          {
            url:
              "https://pro.m.jd.com/mall/active/4CJDG9WuKesrnyPNYY3AvMryQnRq/index.html",
            src:
              "https://m.360buyimg.com/mobilecms/s720x322_jfs/t9697/152/1666716484/124378/dd13b1d8/59e45b81N37129898.jpg!q70.jpg",
            alt: "icon"
          },
          {
            url:
              "https://pro.m.jd.com/mall/active/2bM6GBo13MhPYJ4U1GnqNEtkFrXh/index.html",
            src:
              "https://m.360buyimg.com/mobilecms/s720x322_jfs/t10294/231/1114303512/135560/cb578725/59dc7879N15cfc78f.jpg!q70.jpg",
            alt: "icon"
          },
          {
            url:
              "https://pro.m.jd.com/mall/active/CB9poi26YvSoQ6DFca4CQuo6gsp/index.html",
            src:
              "https://m.360buyimg.com/mobilecms/s720x322_jfs/t7702/265/2711623039/133280/4037cf0a/59e017d5Nc9924826.jpg!q70.jpg",
            alt: "icon"
          }
        ]
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight
      ? { height: this.state.initialHeight }
      : {};
    return (
      <Carousel
        className="my-carousel"
        autoplay={true}
        infinite
        selectedIndex={1}
        swipeSpeed={35}
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log("slide to", index)}
      >
        {this.state.data.map(ii => (
          <a href={ii.url} key={ii} style={hProp}>
            <img
              src={ii.src}
              alt={ii.icon}
              className="carousel-img"
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                this.setState({
                  initialHeight: null
                });
              }}
            />
          </a>
        ))}
      </Carousel>
    );
  }
}
