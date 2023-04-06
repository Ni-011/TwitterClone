import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Messages from "@mui/icons-material/Email";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListIcon from "@mui/icons-material/ListAlt";
import ProfileIcon from "@mui/icons-material/PermIdentity";
import CommunityIcon from "@mui/icons-material/Group";
import MoreIcon from "@mui/icons-material/MoreHoriz";

import { Button } from "@mui/material";

export default function Sidebar() {
  return ( 
    <div className="sidebar">
      <TwitterIcon className="Twitter" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={CommunityIcon} text="Communities" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={Messages} text="Messages" />
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
      <SidebarOption Icon={ListIcon} text="Lists" />
      <SidebarOption Icon={ProfileIcon} text="Profile" />
      <SidebarOption Icon={MoreIcon} text="More" />

      <Button vairant="outlined" className="tweet">
        Tweet
      </Button>
    </div>
  );
}
