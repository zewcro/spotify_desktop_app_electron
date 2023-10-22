import React from "react";
import SongItem from "../Song/SongItem";
import PlaylistInformations from "../Playlist/PlaylistInformations";

import "./HomeRightMenu.css"
import ProfileLogo from "../../assets/Profile.svg";
import FilledLikeLogo from "../../assets/FiiledLike.svg";
import DownloadLogo from "../../assets/Download.svg";
import ThreeDotsLogo from "../../assets/ThreeDots.svg";
import SearchLogo from "../../assets/Search.svg";
import PauseLogo from "../../assets/Pause.svg";
import DurationLogo from "../../assets/Duration.svg";
import PlaylistContent from "../Playlist/PlaylistContent";


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
              <img src={ProfileLogo} alt="" />
            </div>
            <span>zewcro</span>
          </div>
        </div>
        <div className="playlist-content">
   
        <PlaylistInformations 
         playlist_cover_image_url="https://townsquare.media/site/812/files/2018/07/Trippie-Redd-Lifes-A-Trip-Album-Art.jpg?w=1080&q=75https://townsquare.media/site/812/files/2018/07/Trippie-Redd-Lifes-A-Trip-Album-Art.jpg?w=1080&q=75"
         playlist_privacy="PUBLIC"
         playlist_name="Trippie Redd's Greatest Hits"
         playlist_description="A compilation of Trippie Redd's greatest hits to discover or rediscover his music."
         playlist_creator="zewcro"
         playlist_likes="1.000.032"
         playlist_creator_image_url="https://avatars.githubusercontent.com/u/48555250?v=4"
         playlist_total_songs="100"
         playlist_duration="6h23min"
        />

        </div>
      </div>
      <div className="playlist-songs-container">
        <div className="playlist-buttons">
          <div className="playlist-buttons-left">
            <div className="playlist-buttons-resume-pause">
              <img src={PauseLogo} alt="" />
            </div>
            <div className="playlist-buttons-like">
              <img
                src={FilledLikeLogo}
                alt=""
                className="spotify-color"
              />
            </div>
            <div className="playlist-buttons-download">
              <img src={DownloadLogo} alt="" />
            </div>
            <div className="playlist-buttons-three-dot">
              <img src={ThreeDotsLogo} alt="" />
            </div>
          </div>
          <div className="playlist-buttons-right">
            <div className="playlist-buttons-search">
              <img src={SearchLogo} alt="" />
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
                <img src={DurationLogo} alt="" />
              </th>
            </tr>

              <PlaylistContent />
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
