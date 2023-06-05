import { DaysListContainer, StyledButton } from "../DaysList/styled"
import { HabitPlanningContainer } from "./styled"
import { WEEK_DAYS, MSG_CONFIRMACAO_REMOVER_HABITO, URL_BASE } from "../../constants";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";

export default function HabitPlanning(props) {
    const { nomeHabito, removerHabito, diasHabitos, idHabito } = props;
    const {setProgress, token} = useContext(UserContext);

    function handleRemoverHabito(id) {
        if (confirm(MSG_CONFIRMACAO_REMOVER_HABITO)) {
            removerHabito(id);
            salvarProgresso();
        }
    }
    
    function salvarProgresso() {
        axios.get(`${URL_BASE}/habits/today`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            const progresso = {
                total: res.data.length,
                concluidos: res.data.filter(h => h.done === true).length
            }
            setProgress({...progresso});
            localStorage.setItem("userProgress", JSON.stringify(progresso));
        })
    }

    return (
        <HabitPlanningContainer data-test="habit-container">
            <div>
                <span data-test="habit-name">{nomeHabito}</span>

                <DaysListContainer>
                    {
                        WEEK_DAYS.map((d, index) =>
                            <StyledButton
                                data-test="habit-day" 
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