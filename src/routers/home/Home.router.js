import React from "react";
import ReactDOM from "react-dom";
import { SearchBar, Icon } from "antd-mobile";
import { connect } from "dva";
import {
  Menus,
  GreySearchBar,
  RedSearchBar,
  JdCarousel,
  NewsReport,
  Gallery
} from "../../components";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.imgLoadIndex = 0;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll(e) {
    const scrollY = window.scrollY,
      searchBarObj = document.getElementById("redSearchContainer");

    // console.log(scrollY);
    if (scrollY > 100) {
      searchBarObj.style.background = "red";
      searchBarObj.style.opacity = "0.1";
    }

    if (scrollY > 200) {
      searchBarObj.style.background = "#de181b";
      searchBarObj.style.opacity = "0.5";
    }

    if (scrollY > 300) {
      searchBarObj.style.background = "#de181b";
      searchBarObj.style.opacity = "1";
    }

    if (scrollY === 0) {
      searchBarObj.style.background = "transparent";
      searchBarObj.style.opacity = "1";
    }

    const asyncImgs = document.getElementsByClassName("aysncMaskImg");

    const filters = [...asyncImgs].filter(img => {
      return !img.src;
    });
    var seeHeight = document.documentElement.clientHeight; //可见区域高度
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度

    for (let i = 0; i < filters.length; i++) {
      console.log(filters[i].offsetTop);

      if (filters[i].offsetTop < seeHeight + scrollTop) {
        const path = filters[i].dataset.path;
        filters[i].src = path;
        // this.imgLoadIndex++;
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <RedSearchBar />
          <JdCarousel />

          <Menus />
          <NewsReport />

          <Gallery />
          <div
            style={{ height: "500px", background: "green", marginTop: "20px" }}
          >
            block1
          </div>
          <div
            style={{ height: "500px", background: "green", marginTop: "20px" }}
          >
            block2
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users2, users }) {
  return {
    model: users2
  };
}

export default connect(mapStateToProps)(HomePage);
