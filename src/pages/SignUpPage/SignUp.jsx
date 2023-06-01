import { LoginContainer, FormContainer } from "../LoginPage/styled";
import Logo from "../../assets/logo.svg";

export default function SignUp() {
    return (
        <>
            <LoginContainer>
                <img src={Logo} alt="logo TrackIt" />
                <FormContainer>
                    <form>
                        <input data-test="email-input" type="email" name="email" placeholder="email" />
                        <input data-test="password-input" type="password" name="password" placeholder="senha" />
                        <input data-test="user-name-input" type="text" name="name" placeholder="nome" />
                        <input data-test="user-image-input" type="url" name="image" placeholder="foto" />
                        <button data-test="signup-btn">Cadastrar</button>
                    </form>
                </FormContainer>
                <div><a data-test="login-link">Já tem uma conta? Faça login!</a></div>
            </LoginContainer>
        </>
    );
}