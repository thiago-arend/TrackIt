import DaysList from "../DaysList/DaysList";
import { AddHabitContainer } from "./styled";

export default function AddHabit() {
    return (
        <AddHabitContainer>
            <div>
                <input type="text" name="habito" placeholder="nome do hábito" />
                <DaysList />
            </div>
            <div>
                <button>Cancelar</button>
                <button>Salvar</button>
            </div>
        </AddHabitContainer>
    )
}