import { LoginContainer, FormContainer } from "./styled";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import axios from "axios";
import { URL_BASE, MSG_ERRO_INTERNO } from "../../constants";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState(
        {
            email: "",
            password: ""
        }
    );

    function handleChange(e) {
        const dados = { ...loginData };
        dados[e.target.name] = e.target.value;
        setLoginData(dados);
    }

    function sendApiData(e) {
        e.preventDefault();

        axios.post(`${URL_BASE}/auth/login`, loginData)
            .then((res) => {
                navigate("/hoje");
            })
            .catch((err) => {
                (err.response.request.status === 422)
                    ? alert(`Usuário não cadastrado... Faça seu cadastro e poderá logar-se!`)
                    : alert(MSG_ERRO_INTERNO);
            });
    }

    return (
        <LoginContainer>
            <img src={Logo} alt="logo TrackIt" />
            <FormContainer>
                <form onSubmit={sendApiData}>
                    <input onChange={handleChange} data-test="email-input" type="email" name="email" value={loginData.email} placeholder="email" />
                    <input onChange={handleChange} data-test="password-input" type="password" name="password" value={loginData.password} placeholder="senha" />
                    <button type="submit" data-test="login-btn">Entrar</button>
                </form>
            </FormContainer>
            <div>
                <Link to="/cadastro" data-test="signup-link">Não tem uma conta? Cadastre-se!</Link>
            </div>
        </LoginContainer>
    );
}