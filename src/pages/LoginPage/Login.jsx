import { LoginContainer, FormContainer } from "./styled";
import Logo from "../../assets/logo.svg";

export default function Login() {
    return (
        <>
            <LoginContainer>
                <img src={Logo} alt="logo TrackIt" />
                <FormContainer>
                    <form>
                        <input type="email" name="email" placeholder="email" />
                        <input type="password" name="password" placeholder="senha" />
                        <button>Entrar</button>
                    </form>
                </FormContainer>
                <div><a>Não tem uma conta? Cadastre-se!</a></div>
            </LoginContainer>
        </>
    );
}