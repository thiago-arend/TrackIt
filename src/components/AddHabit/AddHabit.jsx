import { useContext, useState } from "react";
import DaysList from "../DaysList/DaysList";
import { AddHabitContainer } from "./styled";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { MSG_ERRO_INTERNO, 
    MSG_ERRO_NAO_SELECIONOU_DIA, 
    MSG_ERRO_NAO_NOMEOU_HABITO, 
    URL_BASE } from "../../constants";
import LoadingButton from "../../components/LoadingButton/LoadingButton";

export default function AddHabit(props) {
    const {setListaHabitos, listaHabitos, setShowAddHabit} = props;
    const [disabledForm, setDisabledForm] = useState(false);
    const { setDadosAddHabit, dadosAddHabit, token, setProgress } = useContext(UserContext);

    const [habitoName, setHabitoName] = useState((dadosAddHabit !== null) ? dadosAddHabit.name : "");
    const [chosedDays, setChosedDays] = useState((dadosAddHabit !== null) ? dadosAddHabit.days : []);

    function sendApiData() {
        if (chosedDays.length === 0) {
            alert(MSG_ERRO_NAO_SELECIONOU_DIA);
            return;
        }

        setDisabledForm(true);

        const obj = {
            name: habitoName,
            days: chosedDays
        }

        axios.post(`${URL_BASE}/habits`, obj, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setDisabledForm(false);
                setShowAddHabit(false);
                setListaHabitos([...listaHabitos, res.data]);
                salvarProgresso();
            })
            .catch((err) => {
                if (err.response.request.status === 422)
                    alert(MSG_ERRO_NAO_NOMEOU_HABITO);
                else
                    alert(MSG_ERRO_INTERNO);
                    
                setDisabledForm(false);
            });
    }

    function handleCancelar() {
        setShowAddHabit(false);
        setDadosAddHabit({
            name: habitoName,
            days: chosedDays
        })
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
        <AddHabitContainer data-test="habit-create-container" >
            <div>
                <input
                    data-test="habit-name-input"
                    type="text"
                    name="habito"
                    placeholder="nome do hábito"
                    value={habitoName}
                    disabled={disabledForm}
                    onChange={(e) => setHabitoName(e.target.value)} />

                <DaysList disabled={disabledForm} chosedDays={chosedDays} setChosedDays={setChosedDays} />
            </div>
            <div>
                <button
                    disabled={disabledForm}
                    onClick={handleCancelar}
                    data-test="habit-create-cancel-btn">
                        Cancelar
                </button>
                <LoadingButton
                        disabled={disabledForm}
                        texto="Salvar"
                        type="submit"
                        width="42"
                        height="42"
                        funcaoClick={sendApiData}
                        teste="habit-create-save-btn" />
            </div>
        </AddHabitContainer>
    )
}