import React from "react";
import ReactDOM from "react-dom";
import { SearchBar, Icon } from "antd-mobile";
import { connect } from "dva";
import GreySearchBar from "../../components/SearchBars/Grey.SearchBar";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <GreySearchBar />
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
