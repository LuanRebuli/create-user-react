import React, { useState, useRef } from "react";
import axios from "axios";

import TwoPeople from "../../assets/talk-two-people.svg";
import Arrow from "../../assets/arrow.svg";
import { Toaster, toast } from "sonner";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  Nav,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const InputName = useRef();
  const InputAge = useRef();

  async function AddNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: InputName.current.value,
      age: InputAge.current.value,
    });

    toast.success("Usuário criado com sucesso!");
    setUsers([...users, newUser]);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={TwoPeople} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={InputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={InputAge} placeholder="Idade" />

        <Toaster richColors expand={true} />
        <Button onClick={AddNewUser}>Cadastrar</Button>

        <Nav to="/usuarios">
          Usuários <img src={Arrow} />
        </Nav>
      </ContainerItens>
    </Container>
  );
}

export default App;
