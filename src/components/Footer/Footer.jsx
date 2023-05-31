import { FooterContainer, TodayContainer } from "./styled";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    return (
        <FooterContainer>
            <a>Hábitos</a>
            <TodayContainer>
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
                    })}/>
            </TodayContainer>
            <a>Histórico</a>
        </FooterContainer>
    )
}