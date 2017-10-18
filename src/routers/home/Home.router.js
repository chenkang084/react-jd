import React from "react";
import ReactDOM from "react-dom";
import { SearchBar, Icon } from "antd-mobile";
import { connect } from "dva";
import {
  Menus,
  GreySearchBar,
  RedSearchBar,
  JdCarousel
} from "../../components";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
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

    console.log(scrollY);
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
  }

  render() {
    return (
      <div>
        <div>
          <RedSearchBar />
          <JdCarousel />

          <Menus/>
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
