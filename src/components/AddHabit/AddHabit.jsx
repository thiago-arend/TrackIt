import { useContext, useState } from "react";
import DaysList from "../DaysList/DaysList";
import { AddHabitContainer } from "./styled";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { URL_BASE } from "../../constants";

export default function AddHabit() {
    const [habitoName, setHabitoName] = useState("");
    const [chosedDays, setChosedDays] = useState([]);
    const { preparaConfig } = useContext(UserContext);

    function sendApiData() {
        const obj = {
            name: habitoName,
            days: chosedDays
        }

        axios.post(`${URL_BASE}/habits`, obj, preparaConfig())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
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
                    onChange={(e) => setHabitoName(e.target.value)} />

                <DaysList chosedDays={chosedDays} setChosedDays={setChosedDays} />
            </div>
            <div>
                <button data-test="habit-create-cancel-btn">Cancelar</button>
                <button onClick={sendApiData} type="submit" data-test="habit-create-save-btn">Salvar</button>
            </div>
        </AddHabitContainer>
    )
}