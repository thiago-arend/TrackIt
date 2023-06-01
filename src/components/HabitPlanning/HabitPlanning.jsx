import DaysList from "../DaysList/DaysList"
import { HabitPlanningContainer } from "./styled" 

export default function HabitPlanning() {
    return (
        <HabitPlanningContainer>
            <div>
                <span>Ler 1 capítulo de livro</span>
                <DaysList />
            </div>
            <div>
                <ion-icon name="trash-outline"></ion-icon>
            </div>
        </HabitPlanningContainer>
    )
}