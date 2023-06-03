import DaysList from "../DaysList/DaysList"
import { DaysListContainer, StyledButton } from "../DaysList/styled"
import { HabitPlanningContainer } from "./styled"
import { WEEK_DAYS, MSG_CONFIRMACAO_REMOVER_HABITO } from "../../constants";

export default function HabitPlanning(props) {
    const { nomeHabito, removerHabito, diasHabitos, idHabito } = props;

    function handleRemoverHabito(id) {
        (confirm(MSG_CONFIRMACAO_REMOVER_HABITO))
        &&
        removerHabito(id);
    }

    return (
        <HabitPlanningContainer data-test="habit-container">
            <div>
                <span data-test="habit-name">{nomeHabito}</span>

                <DaysListContainer>
                    {
                        WEEK_DAYS.map((d, index) =>
                            <StyledButton
                                key={index}
                                isChosed={(diasHabitos.includes(index) ? true : false)}
                            >
                                {d}
                            </StyledButton>
                        )
                    }
                </DaysListContainer>

            </div>
            <div>
                <ion-icon 
                    name="trash-outline"
                    onClick={() => handleRemoverHabito(idHabito)}
                    data-test="habit-delete-btn"></ion-icon>
            </div>
        </HabitPlanningContainer>
    )
}