import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Input from "./components/Input";
import { useState } from "react";
function App() {
  const [user, setuser] = useState(null);
  return (
    <>
      <Header></Header>
      <Input></Input>
      <Container></Container>
    </>
  );
}

export default App;
