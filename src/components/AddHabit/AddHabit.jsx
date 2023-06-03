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
                
                limparDados()
                setDisabledForm(false);
                setShowAddHabit(false);

                setListaHabitos([...listaHabitos, res.data]);
            })
            .catch(() => {

                setDisabledForm(false);
                alert(MSG_ERRO_NAO_NOMEOU_HABITO);
            });
    }

    function persisteDados() {
        setDadosAddHabit(
            {
                name: habitoName,
                days: chosedDays
            }
        );
        setShowAddHabit(false);
    }

    function limparDados() {
        setDadosAddHabit(null);
        setChosedDays([]);
        setHabitoName("");
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
                    onClick={persisteDados}
                    data-test="habit-create-cancel-btn">
                        Cancelar
                </button>
                <LoadingButton
                        disabled={disabledForm}
                        texto="Salvar"
                        type="button"
                        width="42"
                        height="42"
                        funcaoClick={sendApiData} />
            </div>
        </AddHabitContainer>
    )
}