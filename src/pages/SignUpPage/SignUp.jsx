import { LoginContainer, FormContainer } from "../LoginPage/styled";
import Logo from "../../assets/logo.svg";

export default function SignUp() {
    return (
        <>
            <LoginContainer>
                <img src={Logo} alt="logo TrackIt" />
                <FormContainer>
                    <form>
                        <input type="email" name="email" placeholder="email" />
                        <input type="password" name="password" placeholder="senha" />
                        <input type="text" name="name" placeholder="nome" />
                        <input type="url" name="image" placeholder="foto" />
                        <button>Cadastrar</button>
                    </form>
                </FormContainer>
                <div><a>Já tem uma conta? Faça login!</a></div>
            </LoginContainer>
        </>
    );
}