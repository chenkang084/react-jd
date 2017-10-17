import React from "react";
import ReactDOM from "react-dom";
import { TabBar, Icon } from "antd-mobile";
import "./NavTabs.less";

export class NavTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#181818"
        tintColor="#f13030"
        barTintColor="white"
        hidden={this.props.hidden}
      >
        {this.props.menus &&
          this.props.menus.map((item, index) => {
            return (
              <TabBar.Item
                icon={<div style={{ ...item.icon }} />}
                selectedIcon={<div style={{ ...item.selectedIcon }} />}
                title={item.title}
                key={index}
                selected={item.selected === item.title}
                badge={item.badge}
                onPress={item.onPress}
              >
                {item.render && item.render()}
              </TabBar.Item>
            );
          })}
      </TabBar>
    );
  }
}
