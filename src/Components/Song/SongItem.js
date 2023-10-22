import React from "react";

import "./SongItem.css";

const SongItem = ({ id, cover_image_url, title, artist, album, date, duration }) => {
  return (
  <tr>
    <td>{id}</td>
    <td className="song-title">
      <div className="song-image">
        <img src={cover_image_url} alt="" />
      </div>
      <div className="song-name-album">
        <div className="song-name">{title}</div>
        <div className="song-artist">{artist}</div>
      </div>
    </td>
    <td className="song-album">{album}</td>
    <td className="song-date-added">{date}</td>
    <td className="song-duration">{duration}</td>
  </tr>
  );
};

export default SongItem;
