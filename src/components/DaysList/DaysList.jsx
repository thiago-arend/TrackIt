import {DaysListContainer} from "./styled";

export default function DaysList() {
    return (
        <DaysListContainer>
            <button data-test="habit-day">D</button>
            <button data-test="habit-day" disabled>S</button>
            <button data-test="habit-day">T</button>
            <button data-test="habit-day" disabled>Q</button>
            <button data-test="habit-day">Q</button>
            <button data-test="habit-day" disabled>S</button>
            <button data-test="habit-day">S</button>
        </DaysListContainer>
    )
}