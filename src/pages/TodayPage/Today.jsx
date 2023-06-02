import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import HabitDate from "../../components/HabitDate/HabitDate";
import HabitMaintence from "../../components/HabitMaintence/HabitMaintence";
import { TodayContainer, DateContainer } from "./styled"

export default function Today() {
    return (
        <>
            {/*<HabitDate />*/}
            <TodayContainer>
                <DateContainer>
                    <h1>Segunda, 17/05</h1>
                    <span>Nenhum hábito concluído ainda</span>
                </DateContainer>
                <HabitMaintence />
            </TodayContainer>
        </>
    );
}