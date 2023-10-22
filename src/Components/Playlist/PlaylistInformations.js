import React from "react";

import "./PlaylistIformations.css";
import { Fragment } from "react";

const PlaylistInformations = ({
  playlist_cover_image_url,
  playlist_privacy,
  playlist_name,
  playlist_description,
  playlist_creator,
  playlist_likes,
  playlist_creator_image_url,
  playlist_total_songs,
  playlist_duration,
}) => {
  return (
    <>
    <div className="playlist-cover">
      <img src={playlist_cover_image_url} alt="" />
    </div>
      <div className="playlist-info">
        <div className="playlist-public">{playlist_privacy}</div>
        <div className="playlist-title">{playlist_name}</div>
        <div className="playlist-description">{playlist_description}</div>
        <div style={{ height: "10px" }}></div>
        <div className="playlist-stats">
          <img
            src={playlist_creator_image_url}
            width="24px"
            height="24px"
            alt=""
          />
          <span> {playlist_creator} ·</span>
          <span>{playlist_likes} likes · </span>
          <span>{playlist_total_songs} songs · </span>
          <span>{playlist_duration} </span>
        </div>
      </div>
     </>
  );
};

export default PlaylistInformations;
