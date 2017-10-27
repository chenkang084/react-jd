import React from "react";
import ReactDOM from "react-dom";
import { NavTabs } from "../NavTabs/NavTabs";
import { connect } from "dva";
import HomePage from "./HomePage";

import lazyLoadImgs from "../../utils/lazyLoad";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "首页",
      hidden: false,
      searchRecommend: false
    };
  }

  componentDidMount() {
    document
      .getElementsByClassName("am-tabs-pane-wrap")[0]
      .addEventListener("scroll", this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    document
      .getElementsByClassName("am-tabs-pane-wrap")[0]
      .removeEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll(e) {
    const scrollY = document.getElementsByClassName("am-tabs-pane-wrap")[0]
        .scrollTop,
      searchBarObj = document.getElementById("redSearchContainer");

    console.log(scrollY);
    if (scrollY > 200) {
      searchBarObj.style.background = "red";
      searchBarObj.style.opacity = "0.1";
    }

    if (scrollY > 400) {
      searchBarObj.style.background = "#de181b";
      searchBarObj.style.opacity = "0.5";
    }

    if (scrollY > 600) {
      searchBarObj.style.background = "#de181b";
      searchBarObj.style.opacity = "1";
    }

    if (scrollY === 0) {
      searchBarObj.style.background = "transparent";
      searchBarObj.style.opacity = "1";
    }

    lazyLoadImgs();
  }

  handlePress(key) {
    this.setState({
      selectedTab: key
    });
  }

  handleSearchDisplay = status => {
    this.setState({
      searchRecommend: status,
      hidden: status
    });
  };

  render() {
    const menus = [
      HomePage.call(this),
      {
        title: "分类",
        icon: {
          width: "0.44rem",
          height: "0.44rem",
          background:
            "url(./assets/imgs/navs/a-catalog-unselect.png) center /  .44rem no-repeat"
        },
        selectedIcon: {
          width: "0.44rem",
          height: "0.44rem",
          background:
            "url(./assets/imgs/navs/a-catalog.png) center /  .44rem no-repeat"
        },
        selected: this.state.selectedTab,
        badge: 0,
        onPress: () => {
          this.handlePress("分类");
        },
        render: () => {
          return "口碑";
        }
      },
      {
        title: "发现",
        icon: {
          width: "0.44rem",
          height: "0.44rem",
          background:
            "url(./assets/imgs/navs/n-find-unselect.png) center /  .44rem no-repeat"
        },
        selectedIcon: {
          width: "0.44rem",
          height: "0.44rem",
          background:
            "url(./assets/imgs/navs/n-find.png) center /  .44rem no-repeat"
        },
        selected: this.state.selectedTab,
        badge: 1,
        onPress: () => {
          this.handlePress("发现");
        },
        render: () => {
          return "朋友";
        }
      },
      {
        title: "购物",
        icon: {
          width: "0.44rem",
          height: "0.44rem",
          background:
            "url(./assets/imgs/navs/n-cart-unselect.png) center /  35px no-repeat"
        },
        selectedIcon: {
          width: "0.44rem",
          height: "0.44rem",
          background:
            "url(./assets/imgs/navs/n-cart.png) center /  35px no-repeat"
        },
        selected: this.state.selectedTab,
        badge: 1,
        onPress: () => {
          this.handlePress("购物");
        },
        render: () => {
          return "我的";
        }
      },
      {
        title: "我的",
        icon: {
          width: "0.44rem",
          height: "0.44rem",
          background:
            "url(./assets/imgs/navs/n-me-unselect.png) center /  .44rem no-repeat"
        },
        selectedIcon: {
          width: "0.44rem",
          height: "0.44rem",
          background:
            "url(./assets/imgs/navs/n-me.png) center /  .44rem no-repeat"
        },
        selected: this.state.selectedTab,
        badge: 1,
        onPress: () => {
          this.handlePress("我的");
        },
        render: () => {
          return "我的";
        }
      }
    ];

    return (
      <div>
        <NavTabs menus={menus} hidden={this.state.hidden} />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    model: users
  };
}

export default connect(mapStateToProps)(App);
