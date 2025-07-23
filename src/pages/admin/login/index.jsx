import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from '../../../images/logo.png';

function Login() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    async function logar(event) {
        setLoading(true);
        setError(null);
        
        try {
            const retorno = await axios.post('https://back-end-fundesj.onrender.com/usuario/login', { nome, senha });
            if (!retorno.data.token) {
                setError("Credenciais inválidas");
            } else {
                localStorage.setItem('authToken', retorno.data.token);
                navigate('/admin');
            }
        } catch (erro) {
            setError(erro.response?.data?.message || "Credenciais inválidas");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={(e) => {
                e.preventDefault();
                logar();
            }}>
                <img src={logo} alt="Logo" className="login-logo" />
                <h1 className="login-title">Login</h1>
                
                {error && (
                    <div className="login-error">
                        {error}
                    </div>
                )}
                
                <input
                    type="text"
                    value={nome}
                    placeholder="Usuário"
                    onChange={(e) => setNome(e.target.value)}
                    className="login-input"
                    disabled={loading}
                />
                <input
                    type="password"
                    value={senha}
                    placeholder="Senha"
                    onChange={(e) => setSenha(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !loading && logar()}
                    className="login-input"
                    disabled={loading}
                />
                
                <button 
                    className="login-button" 
                    onClick={logar}
                    disabled={loading}
                >
                    {loading ? (
                        <div className="login-spinner"></div>
                    ) : (
                        "Logar"
                    )}
                </button>
            </form>
        </div>
    );
}

export default Login;