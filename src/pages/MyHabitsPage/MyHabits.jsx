import AddHabitPreview from "../../components/AddHabitPreview/AddHabitPreview";
import AddHabit from "../../components/AddHabit/AddHabit";
import HabitsCreationStatus from "../../components/HabitsCreationStatus/HabitsCreationStatus";
import HabitPlanning from "../../components/HabitPlanning/HabitPlanning";
import { MyHabitsContainer } from "./styled";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MSG_ERRO_INTERNO, URL_BASE } from "../../constants";
import { UserContext } from "../../contexts/UserContext";

export default function MyHabits() {
    const { preparaConfig, setProfileImage, setToken } = useContext(UserContext);
    const [showAddHabit, setShowAddHabit] = useState(false);
    const [listaHabitos, setListaHabitos] = useState([]);
    const dadosUsuario = localStorage.getItem("userData");
    let user;

    useEffect(() => {

        if (dadosUsuario !== null) {
            user = JSON.parse(dadosUsuario);
            setToken(user.token);
            setProfileImage(user.image);
        }

        axios.get(`${URL_BASE}/habits`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then((res) => {
                setListaHabitos(res.data);
            });
    }, []);

    function removerHabito(id) {
        axios.delete(`${URL_BASE}/habits/${id}`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then(() => {
                // apaga da lista para gerar reflexo instantaneo no layout
                const novaLista = listaHabitos.filter(h => h.id !== id);
                setListaHabitos(novaLista);
            })
            .catch(() => {
                alert(MSG_ERRO_INTERNO);
            });
    }

    return (

        <MyHabitsContainer>
            <AddHabitPreview setShowAddHabit={setShowAddHabit} />
            {(showAddHabit) && <AddHabit setShowAddHabit={setShowAddHabit}
                setListaHabitos={setListaHabitos}
                listaHabitos={listaHabitos} />}
            {
                (listaHabitos.length === 0)
                    ?
                    <HabitsCreationStatus />
                    :
                    (listaHabitos.map(h => (<HabitPlanning
                        nomeHabito={h.name}
                        diasHabitos={h.days}
                        idHabito={h.id}
                        removerHabito={removerHabito}
                        key={h.id} />)))
            }
        </MyHabitsContainer>
    );
}