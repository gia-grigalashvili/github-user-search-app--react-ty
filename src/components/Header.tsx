import styled from "styled-components";
import Moon from "/public/images/icon-moon.svg";
import sun from "/public/images/icon-sun.svg";
type modes = {
  toggleDarkMode: string;
  mode: boolean;
};
function Header({ toggleDarkMode, mode }: modes) {
  return (
    <Headerdiv mode={mode}>
      <h1>devfinder</h1>
      <div className="nightmode">
        <h1>LIGHT</h1>
        <img onClick={toggleDarkMode} src={mode ? sun : Moon} alt="" />
      </div>
    </Headerdiv>
  );
}
const Headerdiv = styled.div<{ mode: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  h1 {
    /* color: ${(props) => (props.mode ? "#f0f3fc" : "#1E2A47")}; */
    color: ${(props) => (props.mode ? "#fff" : "#2b3442")};
    font-family: "Space Mono";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .nightmode {
    display: flex;
    gap: 10px;
    align-items: center;
    h1 {
      color: ${(props) => (props.mode ? "#fff" : "#2b3442")};
      text-align: right;
      font-family: "Space Mono";
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 2.5px;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
export default Header;
