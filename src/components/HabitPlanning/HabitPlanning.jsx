import DaysList from "../DaysList/DaysList"
import { HabitPlanningContainer } from "./styled" 

export default function HabitPlanning() {
    return (
        <HabitPlanningContainer data-test="habit-container">
            <div>
                <span data-test="habit-name">Ler 1 capítulo de livro</span>
                <DaysList />
            </div>
            <div>
                <ion-icon name="trash-outline" data-test="habit-delete-btn"></ion-icon>
            </div>
        </HabitPlanningContainer>
    )
}