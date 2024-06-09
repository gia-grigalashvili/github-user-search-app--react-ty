/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Container from "./components/Container";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import User from "./Types/User";
// interface ContainerProps {
//   user: User;
//   mode: boolean;
//   userName: string;
// }
function App() {
  const [mode, setmode] = useState<boolean>(false);
  const [userr, setuser] = useState<User | null>(null);
  const [userName, setuserName] = useState<string>("octocat");

  // const [mode, setmode] = useState<ContainerProps>(false);
  // const [userr, setuser] = useState<ContainerProps | null>(null);
  // const [userName, setuserName] = useState<ContainerProps>("octocat");
  const toggleDarkMode = () => {
    setmode(!mode);
  };
  useEffect(() => {
    getusers();
  }, []);

  const getusers = async () => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setuser(data);
  };
  return (
    <>
      <GlobalStyle mode={mode} />
      <Header mode={mode} toggleDarkMode={toggleDarkMode}></Header>
      <Input
        mode={mode}
        userName={userName}
        setuserName={setuserName}
        getusers={getusers}
      ></Input>
      {userr && <Container user={userr} mode={mode} />}
    </>
  );
}
const GlobalStyle = createGlobalStyle<{ mode: boolean }>`
  body {
    background-color: ${(props) => (props.mode ? "#171823;" : "F6F8FF")};
      font-family: "Josefin Sans";
  }
`;

export default App;
