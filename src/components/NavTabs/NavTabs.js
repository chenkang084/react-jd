import React from "react";
import ReactDOM from "react-dom";
import { TabBar, Icon } from "antd-mobile";

export class NavTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.props.hidden}
      >
        {this.props.menus &&
          this.props.menus.map((item, index) => {
            return (
              <TabBar.Item
                icon={{
                  uri: item.icon
                }}
                selectedIcon={{
                  uri: item.selectedIcon
                }}
                title={item.title}
                key={index}
                selected={item.selected === item.title}
                badge={item.badge}
                onPress={item.onPress}
              >
                {item.render()}
              </TabBar.Item>
            );
          })}
      </TabBar>
    );
  }
}
