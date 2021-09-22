import React from "react";
import "./Banner.css";
import { VscHome } from "react-icons/vsc";
import { BsHash } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiMoreLine } from "react-icons/ri";

function Banner() {
  const SIZE = 26.25;
  const navList = [
    { text: "홈", icon: <VscHome size={SIZE} />, link: "/home" },
    { text: "탐색하기", icon: <BsHash size={SIZE} />, link: "/explore" },
    {
      text: "알림",
      icon: <IoMdNotificationsOutline size={SIZE} />,
      link: "/notifications",
    },
    {
      text: "쪽지",
      icon: <BsEnvelope size={SIZE} />,
      link: "/directMessage",
    },
    { text: "프로필", icon: <AiOutlineUser size={SIZE} />, link: "/myPage" },
    { text: "더 보기", icon: <RiMoreLine size={SIZE} />, link: "/more" },
  ];

  return (
    <div className="navigation">
      <h1>
        <a href="/home" aria-label="트위터">
          👭👭
        </a>
      </h1>
      <nav>
        <div className="menu__list">
          {navList.map((el) => (
            <a href={el.link} aria-label={el.text}>
              <div className="menu">
                <span>{el.icon}</span>
                <span className="text">{el.text}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="newTweet">
          <a href="/tweet" aria-label="트윗하기">
            <div className="newTweet__button">
              <span>트윗하기</span>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Banner;
