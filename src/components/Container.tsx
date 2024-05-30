import React from "react";
import styled from "styled-components";

function Container() {
  return (
    <Contianerdiv>
      <div>
        <img src="" alt="" />
        <div>
          <h1>The Octocat</h1>
          <p>@octocat</p>
          <h3>Joined 25 Jan 2011</h3>
        </div>

        <div>
          <h3>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </h3>
        </div>

        <div>
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
      </div>
    </Contianerdiv>
  );
}
const Contianerdiv = styled.div`
  border-radius: 15px;
  background: #1e2a47;
  padding: 24px;
`;
export default Container;
