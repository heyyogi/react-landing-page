import React from 'react'

export default function Banner() {
  return (
    <>
      <div class="banner">
        <div class="header">
          <img class="logo" src="images/logo.svg" />
          <div class="menu">
            <span>About</span>
            <span>Projects</span>
            <span>Services</span>
            <div class="contact">Contact Us</div>
          </div>
        </div>
        <div class="main">
          <span class="text">WE ARE CREATIVES</span>
          <img class="arrow" src="images/icon-arrow-down.svg" alt="image" />
        </div>
      </div>
    </>
  );
}
