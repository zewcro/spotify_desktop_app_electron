import React from "react";

import HomeLogo from "../assets/Home.svg";
import SearchLogo from "../assets/Search.svg";
import YourLibraryLogo from "../assets/YourLibrary.svg";
import CreatePlaylistLogo from "../assets/CreatePlaylist.svg";
import LikeLogo from "../assets/Like.svg";
import "./LeftMenu.css";

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
          <li>
            <a href="#">
              <span>Chill Vibes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Summer Hits</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Workout Motivation</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Party Time</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Road Trip</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Classical Masterpieces</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Jazz for Relaxation</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Rap and Hip-Hop</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Rock Classics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Morning Wake Up</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span>Chill Vibes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Summer Hits</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Workout Motivation</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Party Time</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Road Trip</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Classical Masterpieces</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Jazz for Relaxation</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Rap and Hip-Hop</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Rock Classics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Morning Wake Up</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftMenu;
