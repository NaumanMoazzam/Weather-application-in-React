import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/Table" />
      </div>
    );
  }
}

export default Navigation;
