import React from "react";
import ReactDOM from "react-dom";
import { SearchBar, Icon } from "antd-mobile";
import { connect } from "dva";
import Header from "./Header";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Header />
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
