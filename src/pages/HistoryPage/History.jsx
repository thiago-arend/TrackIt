import { HistoryContainer } from "./styled";
import HistoryCalendar from "../../components/HistoryCalendar/HistoryCalendar";

export default function History() {
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