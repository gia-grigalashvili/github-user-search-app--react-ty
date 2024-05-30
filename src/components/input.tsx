import React from "react";
import styled from "styled-components";
import check from "/public/images/icon-search.svg";
function Input() {
  return <Inputmain></Inputmain>;
}

const Inputmain = styled.input`
  border-radius: 15px;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  pad: 20px;
  border: none;
  width: 326px;
`;
export default Input;
