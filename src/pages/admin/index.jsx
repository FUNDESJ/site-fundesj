import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();


    return(
        <>
        <h1>Login</h1>
        <form action="">
        <input type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e)=> setUsuario(e.target.value)} />
        </form>
        <form action="">
            <input type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)} />
        </form>
        <button onClick={console.log(usuario, senha)}>Clique aqui</button>
        </>
    )
}
export default Admin;

