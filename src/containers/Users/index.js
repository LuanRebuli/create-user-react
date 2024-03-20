import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import IconPeople from "../../assets/icon-people.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import { Container, H1, Image, ContainerItens, Button, User } from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const InputName = useRef();
  const InputAge = useRef();

  async function AddNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: InputName.current.value,
      age: InputAge.current.value,
    });

    setUsers([...users, newUser]);
  }

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={IconPeople} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button to="/">
          <img src={Arrow} />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
