import { HistoryContainer } from "./styled";
import HistoryCalendar from "../../components/HistoryCalendar/HistoryCalendar";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from "react";

export default function History() {
    const { preparaConfig, setProfileImage, setToken } = useContext(UserContext);
    const dadosUsuario = localStorage.getItem("userData");
    let user;

    useEffect(() => {
        if (dadosUsuario !== null) {
            user = JSON.parse(dadosUsuario);
            setToken(user.token);
            setProfileImage(user.image);
        }
    }, []);

    return (
        <HistoryContainer>
            <h1>Histórico</h1>
            <div>
                <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            </div>
            <HistoryCalendar />
        </HistoryContainer>
    );
}