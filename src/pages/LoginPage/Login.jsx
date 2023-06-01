import { LoginContainer, FormContainer } from "./styled";
import Logo from "../../assets/logo.svg";

export default function Login() {
    return (
        <>
            <LoginContainer>
                <img src={Logo} alt="logo TrackIt" />
                <FormContainer>
                    <form>
                        <input data-test="email-input" type="email" name="email" placeholder="email" />
                        <input data-test="password-input" type="password" name="password" placeholder="senha" />
                        <button data-test="login-btn">Entrar</button>
                    </form>
                </FormContainer>
                <div><a data-test="signup-link">Não tem uma conta? Cadastre-se!</a></div>
            </LoginContainer>
        </>
    );
}