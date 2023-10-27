import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectuser } from "./features/counter/userSlice";

function Sidebar() {
  const user = useSelector(selectuser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <Avatar className="sidebar__avatar"> {user.email[0]} </Avatar>
        <h4>{user.name}</h4>
        <h2>{user.email}</h2>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">290432</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on your post</p>
          <p className="sidebar__statNumber">2904</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reacjs")}
        {recentItem("post")}
        {recentItem("programming")}
        {recentItem("SoftwareDevelopment")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
