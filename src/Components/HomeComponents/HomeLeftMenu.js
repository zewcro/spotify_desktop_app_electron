import React from "react";
import PlaylistItem from "../Playlist/PlaylistItem";

import HomeLogo from "../../assets/Home.svg";
import SearchLogo from "../../assets/Search.svg";
import YourLibraryLogo from "../../assets/YourLibrary.svg";
import CreatePlaylistLogo from "../../assets/CreatePlaylist.svg";
import LikeLogo from "../../assets/Like.svg";
import "./HomeLeftMenu.css";

const LeftMenu = () => {
  return (
    <div className="left">
      <div style={{ height: "20px" }}></div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">
              <img src={HomeLogo} alt="" class="gray-filtered" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={SearchLogo} alt="" class="gray-filtered" />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={YourLibraryLogo} alt="" class="gray-filtered" />
              <span>Your Library</span>
            </a>
          </li>
          <div style={{ height: "30px" }}></div>
          <li>
            <a href="#">
              <img src={CreatePlaylistLogo} alt="" class="gray-filtered" />
              <span>Create Playlist</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={LikeLogo} alt="" class="gray-filtered" />
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      </div>
      <hr width="100%" />

      <div style={{ height: "20px" }}></div>
      <div className="menu playlists">
        <ul>
              <PlaylistItem playlist_title="Workout Motivation" />
              <PlaylistItem playlist_title="Party Time" />
              <PlaylistItem playlist_title="Road Trip" />
              <PlaylistItem playlist_title="Classical Masterpieces" />
              <PlaylistItem playlist_title="Jazz for Relaxation" />
              <PlaylistItem playlist_title="Rap and Hip-Hop" />
              <PlaylistItem playlist_title="Rock Classics" />
              <PlaylistItem playlist_title="Morning Wake Up" />
              <PlaylistItem playlist_title="Chill Vibes" />
              <PlaylistItem playlist_title="Summer Hits" />
              <PlaylistItem playlist_title="Workout Motivation" />
              <PlaylistItem playlist_title="Party Time" />
              <PlaylistItem playlist_title="Road Trip" />
              <PlaylistItem playlist_title="Classical Masterpieces" />
              <PlaylistItem playlist_title="Jazz for Relaxation" />
              <PlaylistItem playlist_title="Rap and Hip-Hop" />
              <PlaylistItem playlist_title="Rock Classics" />
              <PlaylistItem playlist_title="Wake Up" />
        </ul>
      </div>
    </div>
  );
};

export default LeftMenu;
