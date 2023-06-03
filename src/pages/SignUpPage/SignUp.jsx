import { LoginContainer, FormContainer } from "../LoginPage/styled";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { URL_BASE, MSG_ERRO_INTERNO, MSG_ERRO_CADASTRO_DUPLICADO } from "../../constants";
import LoadingButton from "../../components/LoadingButton/LoadingButton";

export default function SignUp() {
    const navigate = useNavigate();
    const [disabledForm, setDisabledForm] = useState(false);
    const [signUpData, setSignUpData] = useState(
        {
            email: "",
            name: "",
            image: "",
            password: ""
        }
    );

    function handleChange(e) {
        const dados = { ...signUpData };
        dados[e.target.name] = e.target.value;
        setSignUpData(dados);
    }

    function sendApiData(e) {
        e.preventDefault();
        setDisabledForm(true);

        axios.post(`${URL_BASE}/auth/sign-up`, signUpData)
            .then((res) => {
                setDisabledForm(false);
                navigate("/");
            })
            .catch((err) => {
                setDisabledForm(false);
                (err.response.request.status === 409)
                    ? alert(MSG_ERRO_CADASTRO_DUPLICADO)
                    : alert(MSG_ERRO_INTERNO);
            });
    }

    return (
        <LoginContainer>
            <img src={Logo} alt="logo TrackIt" />
            <FormContainer>
                <form onSubmit={sendApiData}>
                    <input
                        onChange={handleChange}
                        data-test="email-input"
                        type="email"
                        name="email"
                        value={signUpData.email}
                        placeholder="email"
                        disabled={disabledForm} />
                    <input
                        onChange={handleChange}
                        data-test="password-input"
                        type="password"
                        name="password"
                        value={signUpData.password}
                        placeholder="senha"
                        disabled={disabledForm} />
                    <input onChange={handleChange}
                        data-test="user-name-input"
                        type="text"
                        name="name"
                        value={signUpData.name}
                        placeholder="nome"
                        disabled={disabledForm} />
                    <input
                        onChange={handleChange}
                        data-test="user-image-input"
                        type="url"
                        name="image"
                        value={signUpData.image}
                        placeholder="foto"
                        disabled={disabledForm} />
                    <LoadingButton
                        disabled={disabledForm}
                        texto="Cadastrar" />
                </form>
            </FormContainer>
            <div><Link to="/" data-test="login-link">Já tem uma conta? Faça login!</Link></div>
        </LoginContainer>
    );
}