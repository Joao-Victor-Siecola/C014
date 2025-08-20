// Importa a biblioteca axios instalada via npm
import axios from "axios";

// Função que busca usuários em uma API pública
async function buscarUsuarios() {
  try {
    const resposta = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log("📌 Usuários encontrados:");
    resposta.data.forEach(usuario => {
      console.log(`- ${usuario.name} (${usuario.email})`);
    });

  } catch (erro) {
    console.error("❌ Erro ao buscar usuários:", erro.message);
  }
}

// Executa
buscarUsuarios();
