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
    const { preparaConfig, setDadosAddHabit, dadosAddHabit } = useContext(UserContext);

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

        axios.post(`${URL_BASE}/habits`, obj, preparaConfig())
            .then((res) => {
                setDisabledForm(false);
                console.log(res);
            })
            .catch((err) => {
                setDisabledForm(false);
                console.log(err);
            })
    }

    function handleCancelar() {
        setShowAddHabit(false);
        setDadosAddHabit({
            name: habitoName,
            days: chosedDays
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

                <DaysList chosedDays={chosedDays} setChosedDays={setChosedDays} />
            </div>
            <div>
                <button
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
                        funcaoClick={sendApiData} />
            </div>
        </AddHabitContainer>
    )
}