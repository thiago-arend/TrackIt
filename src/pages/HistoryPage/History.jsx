import { HistoryContainer } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./style.css";
import { useState } from "react";
import { URL_BASE } from "../../constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function History() {
    const { setProfileImage, setToken, token, changedScreen, setChangedScreen } = useContext(UserContext);
    const dadosUsuario = localStorage.getItem("userData");
    const [historicoHabitos, setHistoricoHabitos] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        let user;
        if (dadosUsuario !== null) {
            user = JSON.parse(dadosUsuario);
            setToken(user.token);
            setProfileImage(user.image);
        }

        axios.get(`${URL_BASE}/habits/history/daily`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then((res) => {
                setHistoricoHabitos([...res.data]);
            });
    }, []);

    function abreLista(value) {
        const data = historicoHabitos.find(d => Number(d.day.split("/")[0]) === value.getDate());
        if (data !== undefined){
            navigate("/habitosDia", {state: data});
        }
        else
            alert("Não há hábitos nesse dia");
    }

    function retornaHabitos() {
        let completadosAux = [];
        let naoCompletadosAux = [];

        historicoHabitos.forEach(d => {
            const completou = d.habits.filter(h => h.done === true).length === d.habits.length;
            if (completou) completadosAux.push(Number(d.day.slice(0, 2)));
            else naoCompletadosAux.push(Number(d.day.slice(0, 2)));
        });

        return {
            comp: completadosAux, 
            naoComp: naoCompletadosAux
        }
    }

    return (
        <HistoryContainer>
            <h1>Histórico</h1>
            <div>
                <Calendar
                    onClickDay={abreLista}
                    className="calendar" 
                    tileClassName={
                    ({ date, view }) => {
                        if (view === "month" && retornaHabitos().comp.includes(date.getDate())) return "verde";
                        if (view === "month" && retornaHabitos().naoComp.includes(date.getDate())) return "vermelho";
                    }} />
            </div>
        </HistoryContainer>
    );
}