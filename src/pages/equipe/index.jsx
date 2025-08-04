import Header from '../header';
import Footer from '../footer/footer';
import './equipe.css';

function Equipe() {
  const teamMembers = [
    {
      name: "Maria Helena Krüger",
      position: "Superintendente",
      email: "superintendente@fundesj.com.br",
      category: "leadership"
    },
    
    {
      name: "Eloisa Vieira Müller",
      position: "Recursos Humanos",
      email: "gestaodepessoas@fundesj.com.br",
      category: "hr"
    },
    {
      name: "Guilherme de Sousa",
      position: "Supervisor de Educação Tecnológica",
      email: "ed.tecnologia@fundesj.com.br",
      category: "technology"
    },
    {
      name: "Letícia Parnoff",
      position: "Diretora Administrativo-Financeira",
      email: "dir.administrativo@fundesj.com.br",
      category: "finance"
    },
    {
      name: "Maria Luiza dos Santos",
      position: "Assessora Técnica de Ensino",
      email: "assessoria.edu@fundesj.com.br",
      category: "education"
    },
    {
      name: "Jozimar Antônio de Quadros",
      position: "Assessor administrativo",
      email: "dir.administrativo@fundesj.com.br",
      category: "admin"
    },
    {
      name: "Maria Marta de Salete Poffo",
      position: "Assessora Administrativa",
      email: "secretaria@fundesj.com.br",
      category: "admin"
    },
    {
      name: "Arianni de Campos",
      position: "Universitário de Tecnologia",
      email: "tecnologia@fundesj.com.br",
      category: "technology"
    },
    {
      name: "Bernardo Alves Thives",
      position: "Universitário de Tecnologia",
      email: "tecnologia@fundesj.com.br",
      category: "technology"
    },
    {
      name: "Felipe Linhares Domingues",
      position: "Universitário de Tecnologia",
      email: "tecnologia@fundesj.com.br",
      category: "technology"
    },
    {
      name: "Thiago W. Barcellos de Salles",
      position: "Universitário de Recursos Humanos",
      email: "tecnologia@fundesj.com.br",
      category: "hr"
    }, 
    
  ];

  return (
    <>
      <Header />
      <div className='equipe-container'>
        <h2 className='equipe-title'>Nossa Equipe</h2>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className={`team-card ${member.category}`}>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
              <a href={`mailto:${member.email}`} className="member-email">
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Equipe;