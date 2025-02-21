import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Bem-vindo ao Gerenciador de Usuários</h1>} />
      <Route path="/usuarios" element={<Users />} />
    </Routes>
  );
}

export default App;
