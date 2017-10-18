import React from "react";
import ReactDOM from "react-dom";
import styles from "./Menus.less";
import classnames from "classnames";

export default class Menus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {
        url:
          "https://pro.m.jd.com/mall/active/2hqsQcyM5bEUVSStkN3BwrBHqVLd/index.html",
        src:
          "https://m.360buyimg.com/mobilecms/jfs/t5668/159/160398199/14046/acfe1fa3/591d9424N068a7ad0.png",
        alt: "icon",
        text: "京东超市"
      },
      {
        url:
          "https://pro.m.jd.com/mall/active/3YvKJrc4e4WK7aZ46j3h5UMCvEn4/index.html",
        src:
          "https://m.360buyimg.com/mobilecms/jfs/t10837/274/1730090296/17788/4849f9da/59e5c6a8N430eb755.png",
        alt: "icon",
        text: "全球购"
      },
      {
        url:
          "https://pro.m.jd.com/mall/active/3GTca2WsjgRdohGtJCUnWB3bDs8o/index.html",
        src:
          "https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png",
        alt: "icon",
        text: "服装城"
      },
      {
        url:
          "https://pro.m.jd.com/mall/active/4P9a2T9osR9JvtzHVaYTPvsecRtg/index.html",
        src:
          "https://m.360buyimg.com/mobilecms/jfs/t5707/83/1407890143/14681/29321e2c/59263c71Nc7d16503.png",
        alt: "icon",
        text: "京东生鲜"
      },
      {
        url: "https://daojia.jd.com/html/index.html?channel=jdapp",
        src:
          "https://m.360buyimg.com/mobilecms/jfs/t5773/256/159664156/17475/742fec7e/591d9475Na810c2eb.png",
        alt: "icon",
        text: "京东到家"
      },
      {
        url: "https://newcz.m.jd.com/",
        src:
          "https://m.360buyimg.com/mobilecms/jfs/t5647/156/156583179/12255/981e942a/591d94a1Nfde63a47.png",
        alt: "icon",
        text: "充值缴费"
      },
      {
        url: "https://coupon.m.jd.com/center/getCouponCenter.action",
        src:
          "https://m.360buyimg.com/mobilecms/s126x126_jfs/t2758/175/4146829331/10078/d6a3aa98/57aacab9N98edf989.png",
        alt: "icon",
        text: "领京豆"
      },
      {
        url: "https://coupon.m.jd.com/center/getCouponCenter.action",
        src:
          "https://m.360buyimg.com/mobilecms/jfs/t5872/340/146804759/11154/f4ae1409/591d94c4N79a488cc.png",
        alt: "icon",
        text: "领券"
      },
      {
        url: "https://active.jd.com/forever/smartLoans/",
        src:
          "https://m.360buyimg.com/mobilecms/jfs/t10075/194/1736020045/16194/cb873998/59e5c52dN249edd19.png",
        alt: "icon",
        text: "借钱"
      },
      {
        url: "https://home.m.jd.com/user/userAllOrderList.action",
        src:
          "https://m.360buyimg.com/mobilecms/jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png",
        alt: "icon",
        text: "物流查询"
      }
    ];

    return (
      <div className={styles.menusContainer}>
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            return (
              <a href={item.url} key={index} className={styles.aBox}>
                <span className={styles.iconBox}>
                  <img className={styles.menusImg} src={item.src} />
                  <span>{item.text}</span>
                </span>
              </a>
            );
          })}
        <div className="clearfix" />
      </div>
    );
  }
}
