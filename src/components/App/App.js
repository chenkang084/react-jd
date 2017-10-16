import React from "react";
import ReactDOM from "react-dom";
import { NavTabs } from "../NavTabs/NavTabs";
import { connect } from "dva";

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
        icon:
          "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
        selectedIcon:
          "https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg",
        selected: this.state.selectedTab,
        badge: 1,
        onPress: () => {
          this.handlePress("首页");
        }
        // render: () => {
        //   return "首页";
        // }
      },
      {
        title: "口碑",
        icon:
          "https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg",
        selectedIcon:
          "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg",
        selected: this.state.selectedTab,
        badge: 0,
        onPress: () => {
          this.handlePress("口碑");
        }
        // render: () => {
        //   return "口碑";
        // }
      },
      {
        title: "朋友",
        icon:
          "https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg",
        selectedIcon:
          "https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg",
        selected: this.state.selectedTab,
        badge: 1,
        onPress: () => {
          this.handlePress("朋友");
        }
        // render: () => {
        //   return "朋友";
        // }
      },
      {
        title: "我的",
        icon:
          "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",
        selectedIcon:
          "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg",
        selected: this.state.selectedTab,
        badge: 1,
        onPress: () => {
          this.handlePress("我的");
        }
        // render: () => {
        //   return "我的";
        // }
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
