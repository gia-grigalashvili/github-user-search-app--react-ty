import styled from "styled-components";
import Moon from "/public/images/icon-moon.svg";
function Header() {
  return (
    <Headerdiv>
      <h1>devfinder</h1>
      <div>
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
`;
export default Header;
