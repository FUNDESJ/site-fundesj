import { useEffect, useState } from "react";
import axios from "axios";
import './Chamada.css';

export default function PlanilhaDados() {
  const [dados, setDados] = useState([]);
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [termoPesquisa, setTermoPesquisa] = useState("");

  useEffect(() => {
    const fetchDados = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/1TvYbgs_Ec1hERpkCNRQbtSTP2NY3XvWkt_rbfNXwM9g/gviz/tq?tqx=out:json"
        );

        const json = JSON.parse(
          response.data.replace("/*O_o*/\ngoogle.visualization.Query.setResponse(", "").slice(0, -2)
        );

        const colunas = json.table.cols.map((col) => col.label);
        const linhas = json.table.rows.map((row) =>
          row.c.map((cell) => (cell ? cell.v : ""))
        );

        const objetos = linhas.map((linha) =>
          Object.fromEntries(linha.map((valor, i) => [colunas[i], valor]))
        );

        setDados(objetos);
        setDadosFiltrados(objetos);
        setError(null);
      } catch (error) {
        console.error("Erro ao buscar planilha:", error);
        setError("Erro ao carregar dados. Por favor, tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDados();
  }, []);

  useEffect(() => {
    if (termoPesquisa.trim() === "") {
      setDadosFiltrados(dados);
    } else {
      const resultados = dados.filter(item => 
        Object.values(item).some(valor => 
          String(valor).toLowerCase().includes(termoPesquisa.toLowerCase())
        )
      );
      setDadosFiltrados(resultados);
    }
  }, [termoPesquisa, dados]);

  const handlePesquisaChange = (e) => {
    setTermoPesquisa(e.target.value);
  };

  return (
    <div className="planilha-container">
      <div className="planilha-header">
        <h2>Lista de chamada 2025</h2>
        <p>Dados atualizados em tempo real da planilha de voluntários</p>
      </div>

      <div className="pesquisa-container">
        <div className="pesquisa-input-container">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            placeholder="Pesquisar por nome ou qualquer termo..."
            value={termoPesquisa}
            onChange={handlePesquisaChange}
            className="pesquisa-input"
          />
          {termoPesquisa && (
            <button 
              className="limpar-pesquisa"
              onClick={() => setTermoPesquisa("")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
        <div className="contador-resultados">
          {dadosFiltrados.length} {dadosFiltrados.length === 1 ? 'resultado' : 'resultados'}
        </div>
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Carregando dados...</p>
        </div>
      ) : error ? (
        <div className="error-message">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>{error}</p>
        </div>
      ) : (
        <div className="table-responsive">
          {dadosFiltrados.length > 0 ? (
            <table className="planilha-table">
              <thead>
                <tr>
                  {dadosFiltrados.length > 0 &&
                    Object.keys(dadosFiltrados[0]).map((key) => (
                      <th key={key}>
                        <div className="th-content">
                          {key}
                          <span className="sort-icon">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 15L12 20L17 15M7 9L12 4L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {dadosFiltrados.map((linha, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                    {Object.values(linha).map((valor, i) => (
                      <td key={i} data-label={Object.keys(linha)[i]}>
                        {valor || <span className="empty-value">-</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="sem-resultados">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.172 14.828L12.001 12M14.829 9.172L12.001 12M12.001 12L9.172 9.172M12.001 12L14.829 14.828M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12Z" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Nenhum resultado encontrado</h3>
              <p>Não encontramos registros correspondentes à sua pesquisa.</p>
              <button 
                className="limpar-filtro-btn"
                onClick={() => setTermoPesquisa("")}
              >
                Limpar pesquisa
              </button>
            </div>
          )}
        </div>
      )}

      <div className="planilha-footer">
        <p>Total de registros: {dados.length}</p>
        <div className="export-buttons">
          <button className="export-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Exportar CSV
          </button>
          <button className="export-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Exportar Excel
          </button>
        </div>
      </div>
    </div>
  );
}