import styled from "styled-components";
import Moon from "/public/images/icon-moon.svg";
function Header() {
  return (
    <Headerdiv>
      <h1>devfinder</h1>
      <div className="nightmode">
        <h1>LIGHT</h1>
        <img src={Moon} alt="" />
      </div>
    </Headerdiv>
  );
}
const Headerdiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 121px;
  h1 {
    color: #222731;
    font-family: "Space Mono";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  nightmode {
    display: flex;
    h1 {
      color: #4b6a9b;
      text-align: right;
      font-family: "Space Mono";
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 2.5px;
    }
  }
`;
export default Header;
