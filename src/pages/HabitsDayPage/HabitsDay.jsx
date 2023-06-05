import { useLocation } from "react-router-dom";
import { HabitsDayContainer } from "./styled";

export default function HabitsDay() {
    const location = useLocation();
    const {day, habits} = location.state;
    console.log(habits);

    return (
        <HabitsDayContainer>
            <h1>{day}</h1>
            {
                habits.map(h => <p>{h.name}</p>)
            }
        </HabitsDayContainer>
    )
}