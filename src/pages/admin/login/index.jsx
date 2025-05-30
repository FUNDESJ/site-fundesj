import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from '../../../images/logo.png';

function Login() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function logar(event) {
        try {
            const retorno = await axios.post('https://back-end-fundesj.onrender.com/usuario/login', { nome, senha });
            if (!retorno.data.token) {
                alert("Credenciais inválidas");
            } else {
                localStorage.setItem('authToken', retorno.data.token);
                navigate('/admin');
            }
        } catch (erro) {
            alert("Credenciais inválidas");
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <img src={logo} alt="Logo" className="login-logo" />
                <h1 className="login-title">Login</h1>
                <input
                    type="text"
                    value={nome}
                    placeholder="Usuário"
                    onChange={(e) => setNome(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    value={senha}
                    placeholder="Senha"
                    onChange={(e) => setSenha(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && logar()}
                    className="login-input"
                />
                <button className="login-button" onClick={logar}>
                    Logar
                </button>
            </form>
        </div>
    );
}

export default Login;
