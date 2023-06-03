import { useLocation } from "react-router-dom";
import { NavBarContainer } from "./styled";
import {useContext} from "react";
import { UserContext } from "../../contexts/UserContext";

export default function NavBar() {
    const {profileImage} = useContext(UserContext);
    const location = useLocation();

    if (location.pathname !== "/" && location.pathname !== "/cadastro")
        return (
            <NavBarContainer data-test="header">
                <span>TrackIt</span>
                <img src={profileImage} />
            </NavBarContainer>
        )
}