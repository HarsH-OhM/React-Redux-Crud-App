import React, { Component } from "react";
import PostForm from "./PostForm";
import AllPost from "./AllPost";

import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="navbar">
          <h2 className="center ">Post It</h2> 
        </div> */}
        <PostForm />
        {/* <AllPost /> */}
      </div>
    );
  }
}
export default Home;
