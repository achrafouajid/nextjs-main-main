import React from "react";
import { FaUserMd, FaQuestionCircle } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { IoMail, IoSettings, IoLogOut } from "react-icons/io5";
import Link from "next/link";
import "./Profile.css";

function Profile() {
  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu") as HTMLDivElement;
    toggleMenu.classList.toggle("active");
  };

  return (
    <div className="action">
      <div className="profile" onClick={menuToggle}>
        <img src="avatar.jpg" alt="Profile Avatar" />
      </div>
      <div className="menu">
        <h3>
          Dr. John Doe
          <br />
          <span>Spécialiste Pneumologue</span>
        </h3>
        <ul>
          <li>
            <FaUserMd className="icon" />
            <a href="#">My profile</a>
          </li>
          <li>
            <RiEdit2Fill className="icon" />
            <a href="#">Edit profile</a>
          </li>
          <li>
            <IoMail className="icon" />
            <a href="#">Inbox</a>
          </li>
          <li>
            <IoSettings className="icon" />
            <a href="#">Setting</a>
          </li>
          <li>
            <FaQuestionCircle className="icon" />
            <a href="#">Help</a>
          </li>
          <li>
            <IoLogOut className="iconlogout" />
            <Link prefetch={false} className="logout" href="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
