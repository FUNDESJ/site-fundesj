import { useState } from 'react';
import './realizacoes.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';

// Imagens 2024
import Imagem1 from '../../images/fotos realizacoes/1.png';
import Imagem2 from '../../images/fotos realizacoes/2.png';
import Imagem3 from '../../images/fotos realizacoes/3.png';
import Imagem4 from '../../images/fotos realizacoes/4.png';
import Imagem5 from '../../images/fotos realizacoes/5.png';
import Imagem6 from '../../images/fotos realizacoes/6.png';
import Imagem7 from '../../images/fotos realizacoes/7.png';
import Imagem8 from '../../images/fotos realizacoes/8.png';
import Imagem9 from '../../images/fotos realizacoes/9.png';

// Imagens 2025
import Imagem10 from '../../images/fotos realizacoes/10.png';
import Imagem11 from '../../images/fotos realizacoes/11.png';
import Imagem12 from '../../images/fotos realizacoes/12.png';
import Imagem13 from '../../images/fotos realizacoes/13.png';
import Imagem14 from '../../images/fotos realizacoes/14.png';
import Imagem15 from '../../images/fotos realizacoes/15.png';
import Imagem16 from '../../images/fotos realizacoes/16.png';
import Imagem17 from '../../images/fotos realizacoes/17.png';

// Banners
import banner2024 from '../../images/fotos realizacoes/banner2024.png';
import banner2025 from '../../images/fotos realizacoes/banner2025.png';

function Realizacoes() {
  const [anoAtivo, setAnoAtivo] = useState('2025');

  const imagens2024 = [
    { id: 1, src: Imagem1, alt: "Realização 2024 - 1" },
    { id: 2, src: Imagem2, alt: "Realização 2024 - 2" },
    { id: 3, src: Imagem3, alt: "Realização 2024 - 3" },
    { id: 4, src: Imagem4, alt: "Realização 2024 - 4" },
    { id: 5, src: Imagem5, alt: "Realização 2024 - 5" },
    { id: 6, src: Imagem6, alt: "Realização 2024 - 6" },
    { id: 7, src: Imagem7, alt: "Realização 2024 - 7" },
    { id: 8, src: Imagem8, alt: "Realização 2024 - 8" },
    { id: 9, src: Imagem9, alt: "Realização 2024 - 9" }
  ];

  const imagens2025 = [
    { id: 1, src: Imagem10, alt: "Realização 2025 - 1" },
    { id: 2, src: Imagem11, alt: "Realização 2025 - 2" },
    { id: 3, src: Imagem12, alt: "Realização 2025 - 3" },
    { id: 4, src: Imagem13, alt: "Realização 2025 - 4" },
    { id: 5, src: Imagem14, alt: "Realização 2025 - 5" },
    { id: 6, src: Imagem15, alt: "Realização 2025 - 6" },
    { id: 7, src: Imagem16, alt: "Realização 2025 - 7" },
    { id: 8, src: Imagem17, alt: "Realização 2025 - 8" }
  ];

  const imagensAtuais = anoAtivo === '2024' ? imagens2024 : imagens2025;
  const bannerAtual = anoAtivo === '2024' ? banner2024 : banner2025;

  return (
    <>
      <Header />
      <main className="realizacoes-container">
        <div className="banner-section">
          <img src={bannerAtual} alt={`Banner ${anoAtivo}`} className="ano-banner" />
        </div>

        <div className="tabs-container">
          <button 
            className={`tab-button ${anoAtivo === '2024' ? 'active' : ''}`}
            onClick={() => setAnoAtivo('2024')}
          >
            Realizações 2024
          </button>
          <button 
            className={`tab-button ${anoAtivo === '2025' ? 'active' : ''}`}
            onClick={() => setAnoAtivo('2025')}
          >
            Realizações 2025
          </button>
        </div>

        <div className="gallery-grid">
          {imagensAtuais.map((imagem) => (
            <div key={imagem.id} className="gallery-item">
              <div className="image-wrapper">
                <img src={imagem.src} alt={imagem.alt} className="gallery-image" />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Realizacoes;