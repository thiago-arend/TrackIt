import { HistoryContainer } from "./styled";
import HistoryCalendar from "../../components/HistoryCalendar/HistoryCalendar";
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
    const { setProfileImage, setToken, token } = useContext(UserContext);
    const dadosUsuario = localStorage.getItem("userData");
    const [historicoHabitos, setHistoricoHabitos] = useState([]);
    const [completados, setCompletados] = useState([]);
    const [naoCompletados, setNaoCompletados] = useState([]);
    //const navigate = useNavigate();
    
    console.log(naoCompletados);

    useEffect(() => {
        let user;
        if (dadosUsuario !== null) {
            user = JSON.parse(dadosUsuario);
            setToken(user.token);
            setProfileImage(user.image);
        }

        setaHistoricoHabitos();
    }, []);

    function setaHistoricoHabitos() {
        axios.get(`${URL_BASE}/habits/history/daily`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setHistoricoHabitos(res.data);

                let completadosAux = [];
                let naoCompletadosAux = [];

                historicoHabitos.forEach(d => {
                    const completou = d.habits.filter(h => h.done === true).length === d.habits.length;
                    if (completou) completadosAux.push(Number(d.day.slice(0, 2)));
                    else naoCompletadosAux.push(Number(d.day.slice(0, 2)));
                });

                setCompletados([...completadosAux]);
                setNaoCompletados([...naoCompletadosAux]);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    /*function abreLista(value) {
        navigate("/habitosDia", 
            {state: historicoHabitos.some(d => Number(d.day.split("/")[0])) === value.getDate()})
    }*/

    return (
        <HistoryContainer>
            <h1>Histórico</h1>
            <div>
                <Calendar
                    //onClickDay={abreLista}
                    className="calendar" 
                    tileClassName={
                    ({ date, view }) => {
                        if (view === "month" && completados.includes(date.getDate())) return "verde";
                        if (view === "month" && naoCompletados.includes(date.getDate())) return "vermelho";
                    }} />
            </div>
        </HistoryContainer>
    );
}