import React from "react";
import styled from "styled-components";
import location from "/public/images/icon-location.svg";
import share from "/public/images/icon-website.svg";
import twitter from "/public/images/icon-twitter.svg";
function Container() {
  return (
    <Contianerdiv>
      <div className="information">
        <img src="" alt="" />
        <div>
          <h1>The Octocat</h1>
          <p>@octocat</p>
          <h3>Joined 25 Jan 2011</h3>
        </div>
      </div>
      <div className="text">
        <h3>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </h3>
      </div>

      <div className="info">
        <div className="ifno-text">
          <h2>Repos</h2>
          <h1>8</h1>
        </div>
        <div className="ifno-text">
          <h2>Followers</h2>
          <h1>3938</h1>
        </div>
        <div className="ifno-text">
          <h2>Following</h2>
          <h1>9</h1>
        </div>
      </div>

      <div className="info-1">
        <div className="info-1-text">
          <img src={location} alt="" />
          <p>San Francisco</p>
        </div>
        <div className="info-1-text">
          <img src={share} alt="" />
          <p></p>
        </div>
        <div className="info-1-text">
          <img src={twitter} alt="" />
          <p></p>
        </div>
        <div className="info-1-text">
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
    </Contianerdiv>
  );
}
const Contianerdiv = styled.div`
  border-radius: 15px;
  background: #1e2a47;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin-top: 20px;
  .information {
    display: flex;
    gap: 20px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 70px;
    }
    h1 {
      color: #fff;

      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      color: #0079ff;
      font-size: 13px;
      font-weight: 400;
    }
    h3 {
      color: #fff;

      font-size: 13px;

      font-weight: 400;
    }
  }

  .text {
    margin-top: 30px;
    h3 {
      color: #fff;
      font-family: "Space Mono";
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 192.308% */
    }
  }
  .info {
    border-radius: 10px;
    background: #f6f8ff;
    padding: 23px 20px 23px;
    display: flex;
    gap: 20px;
    margin-top: 30px;
    justify-content: center;
    .ifno-text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h2 {
        color: #4b6a9b;
        text-align: center;
        font-family: "Space Mono";
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      h1 {
        color: #2b3442;
        text-align: center;
        font-family: "Space Mono";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
    }
    .info-1 {
      .info-1-text {
        display: flex;
        gap: 20px;

        img {
          width: 13.753px;
          height: 20px;
          flex-shrink: 0;
        }
        p {
          color: #4b6a9b;
          font-family: "Space Mono";
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }
`;
export default Container;
