import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Input from "./components/Input";
import { useEffect, useState } from "react";

function App() {
  const [user, setuser] = useState<User | null>(null);
  const [userName, setuserName] = useState<string>("octocat");
  useEffect(() => {
    getusers();
  }, [user]);

  const getusers = async () => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setuser(data);
  };
  return (
    <>
      <Header></Header>
      <Input setuserName={setuserName} getusers={getusers}></Input>
      <Container></Container>
    </>
  );
}

export default App;
