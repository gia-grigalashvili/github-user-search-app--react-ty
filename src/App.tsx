/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import User from "./Types/User";

function App() {
  const [userr, setuser] = useState<User | null>(null);
  const [userName, setuserName] = useState<string>("octocat");
  useEffect(() => {
    getusers();
  }, [userr]);

  const getusers = async () => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setuser(data);
  };
  return (
    <>
      <Header></Header>
      <Input setuserName={setuserName} getusers={getusers}></Input>
      <Container User={User}></Container>
    </>
  );
}

export default App;
