import React from "react";
import styled from "styled-components";

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
        <div>
          <h2>Repos</h2>
          <h1>8</h1>
        </div>
        <div>
          <h2>Followers</h2>
          <h1>3938</h1>
        </div>
        <div>
          <h2>Following</h2>
          <h1>9</h1>
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
  }
`;
export default Container;
