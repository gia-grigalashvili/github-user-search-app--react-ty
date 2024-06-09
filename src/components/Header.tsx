import styled from "styled-components";
import Moon from "/public/images/icon-moon.svg";
import Sun from "/public/images/icon-sun.svg";

type Modes = {
  toggleDarkMode: () => void;
  mode: boolean;
};

function Header({ toggleDarkMode, mode }: Modes) {
  return (
    <HeaderDiv mode={mode}>
      <h1>devfinder</h1>
      <div className="nightmode">
        <h1>{mode ? "DARK" : "LIGHT"}</h1>
        <img onClick={toggleDarkMode} src={mode ? Sun : Moon} alt="Mode icon" />
      </div>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div<{ mode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;

  h1 {
    color: ${(props) => (props.mode ? "#fff" : "#2b3442")};
    font-family: "Space Mono";
    font-size: 26px;
    font-weight: 700;
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
      font-weight: 700;
      letter-spacing: 2.5px;
    }

    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 700px;
  }
`;

export default Header;
