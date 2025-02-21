const API_URL = "http://localhost:3000"; // Ajuste para a URL do seu backend

export async function getUsers() {
  const response = await fetch(`${API_URL}/usuarios`);
  return response.json();
}

export async function deleteUser(id) {
  return fetch(`${API_URL}/usuarios/${id}`, { method: "DELETE" });
}
