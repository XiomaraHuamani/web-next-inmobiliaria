"use client";
import React from "react";
import BannerContent from "./banner-content";
import BannerCta from "./banner-cta";
const Banner = () => {
  return (
    <div
      className="banner__area"
      style={{ backgroundImage: `url(/img/banner/header_territorial.webp)` }}
      >
      <div className="container">
        <BannerContent />
        <BannerCta />
      </div>
    </div>
  );
};

export default Banner;
