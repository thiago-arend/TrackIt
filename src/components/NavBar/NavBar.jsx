import { useLocation, useNavigate } from "react-router-dom";
import { NavBarContainer } from "./styled";
import {useContext} from "react";
import { UserContext } from "../../contexts/UserContext";

export default function NavBar() {
    const {profileImage} = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    function deslogar() {
        const sair = confirm("Deseja sair da sua conta?");
        if (sair) {
            localStorage.removeItem("userData");
            localStorage.removeItem("userProgress");
            navigate("/");
        }
    }

    if (location.pathname !== "/" && location.pathname !== "/cadastro")
        return (
            <NavBarContainer data-test="header">
                <span>TrackIt</span>
                <img onClick={deslogar} src={profileImage} data-test="avatar" />
            </NavBarContainer>
        )
}