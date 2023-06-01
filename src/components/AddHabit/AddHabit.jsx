import DaysList from "../DaysList/DaysList";
import { AddHabitContainer } from "./styled";

export default function AddHabit() {
    return (
        <AddHabitContainer data-test="habit-create-container" >
            <div>
                <input data-test="habit-name-input" type="text" name="habito" placeholder="nome do hábito" />
                <DaysList />
            </div>
            <div>
                <button data-test="habit-create-cancel-btn">Cancelar</button>
                <button data-test="habit-create-save-btn">Salvar</button>
            </div>
        </AddHabitContainer>
    )
}