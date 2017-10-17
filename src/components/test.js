import React from "react";
import ReactDOM from "react-dom";
import { TabBar, Icon } from "antd-mobile";
import { connect } from "dva";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>test children</div>
      </div>
    );
  }
}

function mapStateToProps({ users2, users }) {
  return {
    model: users2
  };
}

export default connect(mapStateToProps)(Test);
