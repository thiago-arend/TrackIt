import { useContext } from "react";
import { FooterContainer, TodayContainer } from "./styled";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from "react";

export default function Footer() {
    const location = useLocation();
    const {progress, setProgress} = useContext(UserContext);
    const progressoUsuario = localStorage.getItem("userProgress");

    useEffect(() => {
        if (progressoUsuario !== null) {
            const prog = JSON.parse(progressoUsuario);
            setProgress(prog);
        }
    }, []);

    if (location.pathname !== "/" && location.pathname !== "/cadastro")
        return (
            <FooterContainer data-test="menu">
                <Link to="/habitos" data-test="habit-link">Hábitos</Link>
                <Link to="/hoje" data-test="today-link">
                    <TodayContainer>
                        <CircularProgressbar
                            text="Hoje"
                            value={progress.concluidos}
                            maxValue={(progress.total === 0) ? 100 : progress.total}
                            background="true"
                            backgroundPadding="6"
                            styles={buildStyles({
                                textSize: "18px",
                                textColor: "#FFF",
                                backgroundColor: "#52B6FF",
                                pathColor: "#FFF",
                                trailColor: "#52B6FF"
                            })} />
                    </TodayContainer>
                </Link>
                <Link to="/historico" data-test="history-link" >Histórico</Link>
            </FooterContainer>
        )
}