import React from "react";
import "./codingProfile.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { hover } from "@testing-library/user-event/dist/hover";

const data = [
  {
    avatar: AVTR1,
    name: "LeetCode",
    link: "https://leetcode.com/bikramdeep/",
    description:
      "Solved 250+ questions and daily practice my DSA skills",
  },
  {
    avatar: AVTR2,
    name: "Hackerrank",
    link: "https://www.hackerrank.com/bikram_singh294",
    description:
      "5 Star coder in Problem Solving",
  },
  {
    avatar: AVTR3,
    name: "Github",
    link: "https://github.com/bikram294",
    description:
      "Visit to view my Projects",
  },
  {
    avatar: AVTR4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bikram-singh294/",
    description:
      "Let's Connect...",
  },
];

const Profiles = () => {
  return (
    <section id="profiles">
      <h5>Feel free to visit</h5>
      <h2>My Profiles</h2>

      <Swiper
        className="container profiles__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className="profile">
              <div className="profile__avatar">
                <img src={item.avatar} alt="Avatar One" />
              </div>
              <a href={item.link} target="_blank" style={{"font-weight": "bold", "font-size":"1.1rem"}}>{item.name}</a>
              <small className="profile__description">{item.description}</small>
              
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Profiles;
