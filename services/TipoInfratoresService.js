//diretoriosmt/client/services/TipoInfratoresService.js
export async function fetchTipoInfratores() {
  const response = await fetch('http://localhost:8090/Smt/api/tiposinfratores/lista'); // Substitua pela sua rota real da API
  if (!response.ok) {
    throw new Error('Erro ao buscar os tipos de infratores');
  }
  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('Resposta inválida do servidor: esperado um array');
  }
  return data;
}
