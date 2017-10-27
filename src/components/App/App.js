import React from "react";
import ReactDOM from "react-dom";
import { NavTabs } from "../NavTabs/NavTabs";
import { connect } from "dva";
import {
  Menus,
  GreySearchBar,
  RedSearchBar,
  JdCarousel,
  NewsReport,
  Gallery
} from "../../components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "首页",
      hidden: false
    };
  }

  handlePress(key) {
    this.setState({
      selectedTab: key
    });
  }

  render() {
    const menus = [
      {
        title: "首页",
        icon: {
          width: "0.44rem",
          height: "0.44rem",
          background:
            "url(./assets/imgs/navs/a-home-unselect.png) center /  .44rem no-repeat"
        },
        selectedIcon: {
          width: "0.44rem",
          height: "0.44rem",
          background:
            "url(./assets/imgs/navs/a-home.png) center /  .44rem no-repeat"
        },
        selected: this.state.selectedTab,
        // badge: 1,
        onPress: () => {
          this.handlePress("首页");
        },
        render: () => {
          return (
            <div>
              <RedSearchBar />
              <JdCarousel />

              <Menus />
              <NewsReport />
              <Gallery />
            </div>
          );
        }
      },
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
        <NavTabs menus={menus} />
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
