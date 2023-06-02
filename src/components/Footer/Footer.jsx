import { FooterContainer, TodayContainer } from "./styled";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation();

    if (location.pathname !== "/" && location.pathname !== "/cadastro")
        return (
            <FooterContainer data-test="menu">
                <a data-test="habit-link">Hábitos</a>
                <TodayContainer data-test="today-link">
                    <CircularProgressbar
                        text="Hoje"
                        value={50}
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
                <a data-test="history-link" >Histórico</a>
            </FooterContainer>
        )
}