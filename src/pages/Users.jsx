import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";

function Users() {
  const [users, setUsers] = useState([]);

  // Função para carregar os usuários
  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const data = await getUsers();
    setUsers(data);
  }

  // Função para deletar um usuário
  async function handleDelete(id) {
    await deleteUser(id);
    loadUsers(); // Atualiza a lista após deletar
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button onClick={() => handleDelete(user.id)}>Excluir</button>
            </li>
          ))
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}
      </ul>
    </div>
  );
}

export default Users;
