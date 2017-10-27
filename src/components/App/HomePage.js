import React from "react";
import ReactDOM from "react-dom";
import {
  Menus,
  GreySearchBar,
  RedSearchBar,
  JdCarousel,
  NewsReport,
  Gallery,
  SearchRecommend
} from "../../components";

export default function() {
  return {
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
          <div
            style={{ display: this.state.searchRecommend ? "none" : "block" }}
          >
            <RedSearchBar
              handleSearchDisplay={this.handleSearchDisplay}
              searchRecommend={this.state.searchRecommend}
            />
            <JdCarousel />
            <Menus />
            <NewsReport />
            <Gallery />
          </div>
          <GreySearchBar
            handleSearchDisplay={this.handleSearchDisplay}
            searchRecommend={this.state.searchRecommend}
          />
        </div>
      );
    }
  };
}
