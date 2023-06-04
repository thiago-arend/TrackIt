import { HabitMaintenceContainer } from "./styled";
import check from "../../assets/check.svg"
import axios from "axios";
import { MSG_ERRO_HABITO_INVALIDO_CHECK, MSG_ERRO_HABITO_INVALIDO_UNCHECK, URL_BASE } from "../../constants";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function HabitMaintence(props) {
    const { preparaConfig } = useContext(UserContext);
    const { id, name, done, currentSequence, highestSequence } = props.habito;
    const { todayHabits, setTodayHabits } = props;

    function concluiHabito() {

        if (done === false) { // se tarefa não foi concluida, envia requisição específica

            axios.post(`${URL_BASE}/habits/${id}/check`, {}, preparaConfig())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                if (err.response.request.status === 400)
                    alert(MSG_ERRO_HABITO_INVALIDO_CHECK);
            });
        }
        else { // se tarefa foi concluida, envia requisição específica

            axios.post(`${URL_BASE}/habits/${id}/uncheck`, {}, preparaConfig())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                if (err.response.request.status === 400)
                    alert(MSG_ERRO_HABITO_INVALIDO_UNCHECK);
            });
        }
    }

    return (
        <HabitMaintenceContainer done={done}>
            <div>
                <h1>{name}</h1>
                <span>Sequência atual: <span>{currentSequence} dias</span><br />Seu recorde: <span>{highestSequence} dias</span></span>
            </div>
            <div>
                <img onClick={concluiHabito} src={check} />
            </div>
        </HabitMaintenceContainer>
    );
}