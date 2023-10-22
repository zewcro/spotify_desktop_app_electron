import React from "react";

import "./PlaylistItem.css";

const PlaylistItem = ({playlist_title}) => {
  return (
    <li>
      <a href="#">
        <span>{playlist_title}</span>
      </a>
    </li>
  );
};

export default PlaylistItem;
