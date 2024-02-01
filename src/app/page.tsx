//diretoriosmt/client/app/page.tsx
'use client'
import { useEffect, useState } from 'react';
import { fetchTipoInfratores } from '../../services/TipoInfratoresService';

export default function App() {
  const [tiposInfratores, setTiposInfratores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTipoInfratores();
        setTiposInfratores(data);
      } catch (error) {
        console.error('Erro ao buscar os tipos de infratores:', error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-black">
      <h1 className="text-2xl font-semibold mb-4">Tipos de Infratores</h1>
      <ul>
        {tiposInfratores.map((tipoInfrator) => (
          <li key={tipoInfrator.id} className="mb-2">
            ID: {tipoInfrator.id}, Descrição: {tipoInfrator.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}
