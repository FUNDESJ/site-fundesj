import Header from '../../header/index.jsx';
import Footer from '../../footer/footer.jsx';
import './calendario.css';
import calendarioCiclo from '../../../images/fotos ciclo/calendarioCiclo.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Calendario() {
    const [palestras, setPalestras] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        carregarPalestras();
    }, []);

    async function carregarPalestras() {
        try {
            setIsLoading(true);
            const lista = await axios.get('https://back-end-fundesj.onrender.com/palestras');
            setPalestras(lista.data);
        } catch (erro) {
            console.log("Erro ao carregar palestras");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="calendario-page">
            <Header />
            
            <main>
                <div className='titulo'>
                    <h1 className="calendario-title">Calendário de Palestras</h1>
                    <div className='divider'></div>
                </div>
                
                <img src={calendarioCiclo} alt="Calendário do Ciclo de Palestras" className="calendario-image" />
                
                {isLoading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                    </div>
                ) : (
                    <div className="palestras-container">
                        {palestras.map((palestra, index) => (
                            <article className="palestra-card" key={index}>
                                <img 
                                    src={palestra.foto} 
                                    alt={`Palestra ${palestra.titulo}`} 
                                    className="palestra-image"
                                    onError={(e) => {
                                        e.target.onerror = null; 
                                        e.target.src = 'https://via.placeholder.com/400x200?text=Imagem+Indisponível';
                                    }}
                                />
                                <div className="palestra-content">
                                    <h3 className="palestra-title">{palestra.titulo}</h3>
                                    <p className="palestra-info"><span className="palestra-highlight">Local:</span> Centro de Atenção à Terceira Idade (CATI)</p>
                                    <p className="palestra-info"><span className="palestra-highlight">Data:</span> {palestra.data.split("T")[0].split("-").reverse().join("/")}</p>
                                    <p className="palestra-info"><span className="palestra-highlight">Horário:</span> {palestra.horario.slice(0, 5)}</p>
                                    <p className="palestra-info"><span className="palestra-highlight">Palestrante:</span> {palestra.palestrante}</p>
                                    <p className="palestra-description">{palestra.subTitulo}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}