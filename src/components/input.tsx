// import React from "react";
import styled from "styled-components";
import check from "/public/images/icon-search.svg";
interface InputProps {
  getusers: () => void;
  setuserName: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  mode: boolean;
}
function Input({ getusers, setuserName, userName, mode }: InputProps) {
  return (
    <Inputmaindiv mode={mode}>
      <img src={check} alt="" />
      <input
        onChange={(event) => setuserName(event.target.value)}
        type="text"
        value={userName}
        placeholder="Enter GitHub username"
      />
      <button onClick={getusers}>Search</button>
    </Inputmaindiv>
  );
}

const Inputmaindiv = styled.div<{ mode: boolean }>`
  border-radius: 15px;
  background: ${(props) => (props.mode ? "#1E2A47" : "#fff")};

  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  padding: 10px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  border: none;
  width: 100%;

  img {
    width: 20.048px;
    height: 20px;
    flex-shrink: 0;
  }
  button {
    width: 84px;
    height: 46px;
    border-radius: 10px;
    border: none;
    color: #fff;
    text-align: center;
    font-family: "Space Mono";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: #0079ff;
  }
  input {
    border: none;
    width: 100%;
    background: ${(props) => (props.mode ? "#1E2A47" : "#FEFEFE")};
    /* color: #4b6a9b; */
    color: ${(props) => (props.mode ? "#fff" : "#4b6a9b")};
    font-family: "Space Mono";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 192.308% */
  }
`;

export default Input;
