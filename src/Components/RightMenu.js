import React from "react";

import "./RightMenu.css"

const RightMenu = () => {
  return (
    <div className="right">
      <div className="playlist-header">
        <div className="playlist-top">
          <div className="playlist-arrows">
            <div className="arrow-container">
              <img src="assets/LeftArrow.svg" alt="" />
            </div>
            <div className="arrow-container">
              <img src="assets/RightArrow.svg" alt="" />
            </div>
          </div>
          <div className="playlist-top-email">
            <div className="arrow-container">
              <img src="assets/Profile.svg" alt="" />
            </div>
            <span>zewcro</span>
          </div>
        </div>
        <div className="playlist-content">
          <div className="playlist-cover">
            <img src="images/playlist-cover.png" alt="" />
          </div>
          <div className="playlist-info">
            <div className="playlist-public"> PUBLIC PLAYLIST</div>
            <div className="playlist-title">classNameic Road Trip Songs</div>
            <div className="playlist-description">
              A soundtrack to fuel your good mood while on the road.
            </div>
            <div style={{ height: "10px" }}></div>
            <div className="playlist-stats">
              <img
                src="assets/spotify-logo.png"
                width="24px"
                height="24px"
                alt=""
              />
              <span> Spotify ·</span>
              <span>5,131,321 likes · </span>
              <span>100 songs, </span>
              <span>6 hr 57 min </span>
            </div>
          </div>
        </div>
      </div>
      <div className="playlist-songs-container">
        <div className="playlist-buttons">
          <div className="playlist-buttons-left">
            <div className="playlist-buttons-resume-pause">
              <img src="assets/Pause.svg" alt="" />
            </div>
            <div className="playlist-buttons-like">
              <img
                src="assets/FiiledLike.svg"
                alt=""
                className="spotify-color"
              />
            </div>
            <div className="playlist-buttons-download">
              <img src="assets/Download.svg" alt="" />
            </div>
            <div className="playlist-buttons-three-dot">
              <img src="assets/ThreeDots.svg" alt="" />
            </div>
          </div>
          <div className="playlist-buttons-right">
            <div className="playlist-buttons-search">
              <img src="assets/Search.svg" alt="" />
            </div>
            <div className="playlist-buttons-order">Custom Order</div>
          </div>
        </div>
        <div className="playlist-songs">
          <table>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Album</th>
              <th>Date Added</th>
              <th>
                <img src="assets/Duration.svg" alt="" />
              </th>
            </tr>
            <tr>
              <td>1</td>
              <td className="song-title">
                <div className="song-image">
                  <img src="images/song-cover.jpeg" alt="" />
                </div>
                <div className="song-name-album">
                  <div className="song-name">
                    Young as the Morning old as the Sea
                  </div>
                  <div className="song-artist">Passenger</div>
                </div>
              </td>
              <td className="song-album">
                Young as the Morning old as the Sea
              </td>
              <td className="song-date-added">May 31, 2022</td>
              <td className="song-duration">3:26</td>
            </tr>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
