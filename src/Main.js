import React from "react";
import Header from "./Header";
import MyTweet from "./MyTweet";
import Tweets from "./Tweets";
import './Main.css';
import Sidebar from "./Sidebar";

function Main() {
  return (
    <>
      <div className="primaryColumn">
        <div className="header">
          <Header />
        </div>
        <div className="my__tweet">
          <MyTweet />
        </div>
        <div className="tweets">
          <Tweets />
        </div>
      </div>
      <div className="sidebarColumn">
      <div className="sidebar">
        <Sidebar />
      </div>
      </div>
    </>
  );
}

export default Main;
