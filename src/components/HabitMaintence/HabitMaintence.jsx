import { HabitMaintenceContainer } from "./styled";
import check from "../../assets/check.svg"
import axios from "axios";
import { MSG_ERRO_HABITO_INVALIDO_CHECK, MSG_ERRO_HABITO_INVALIDO_UNCHECK, URL_BASE } from "../../constants";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function HabitMaintence(props) {
    const { token } = useContext(UserContext);
    const { id, name, done, currentSequence, highestSequence } = props.habito;
    const { todayHabits, setTodayHabits, carregaProgresso } = props;

    function recarregaHabitos() {
        axios.get(`${URL_BASE}/habits/today`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            setTodayHabits([...res.data])
        })
    }

    function marcarHabito() {

        if (done === false) { // se tarefa não foi concluida, envia requisição específica

            axios.post(`${URL_BASE}/habits/${id}/check`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                carregaProgresso(1, todayHabits);
                recarregaHabitos();
            })
            .catch((err) => {
                if (err.response.request.status === 400)
                    alert(MSG_ERRO_HABITO_INVALIDO_CHECK);
            });
        }
        else { // se tarefa foi concluida, envia requisição específica

            axios.post(`${URL_BASE}/habits/${id}/uncheck`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                carregaProgresso(-1, todayHabits);
                recarregaHabitos();
            })
            .catch((err) => {
                if (err.response.request.status === 400)
                    alert(MSG_ERRO_HABITO_INVALIDO_UNCHECK);
            });
        }
    }

    return (
        <HabitMaintenceContainer
            alteraRec={((currentSequence === highestSequence) && (currentSequence > 0))}
            done={done}>
            <div>
                <h1>{name}</h1>
                <span>Sequência atual: <span>{currentSequence} dias</span><br />Seu recorde: <span>{highestSequence} dias</span></span>
            </div>
            <div>
                <img onClick={marcarHabito} src={check} />
            </div>
        </HabitMaintenceContainer>
    );
}