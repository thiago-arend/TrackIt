import HabitMaintence from "../../components/HabitMaintence/HabitMaintence";
import { TodayContainer, DateContainer } from "./styled"
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { URL_BASE, WEEK_DAYS_FULL } from "../../constants";
import dayjs from "dayjs";

export default function Today() {
    const { setProgress, progress, setProfileImage, setToken, todayHabits, setTodayHabits } = useContext(UserContext);
    const date = {
        d: dayjs().format("DD"),
        m: dayjs().format("MM"),
        dSemana: WEEK_DAYS_FULL[dayjs().format("d").toString()]
    };
    const dadosUsuario = localStorage.getItem("userData");
    let user; // passar diretamente o user.token nas chamadas a api
    // é uma maneira de evitar o 'delay' de renderização por mudança de estado

    function salvaProgresso(listaHabitos) {
        const progresso = {
            total: listaHabitos.length,
            concluidos: listaHabitos.filter(h => h.done === true).length
        }
        localStorage.setItem("userProgress", JSON.stringify(progresso));
    }

    useEffect(() => {

        if (dadosUsuario !== null) {
            user = JSON.parse(dadosUsuario);
            setToken(user.token);
            setProfileImage(user.image);
        }

        axios.get(`${URL_BASE}/habits/today`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then((res) => {
                setTodayHabits(res.data);
                carregaProgresso(0, res.data);
                salvaProgresso(res.data);
            });
    }, []);

    function carregaProgresso(maisOuMenosUm, listaHabitos) {
        setProgress({
            total: listaHabitos.length,
            concluidos: listaHabitos.filter(h => h.done === true).length
                + maisOuMenosUm
        });
    }

    return (
        <TodayContainer>
            <DateContainer alteraSpan={progress.concluidos > 0}>
                <h1 data-test="today">{date.dSemana}, {date.d}/{date.m}</h1>
                {
                    (progress.concluidos === 0)
                        ?
                        <span data-test="today-counter">Nenhum hábito concluído ainda</span>
                        :
                        <span data-test="today-counter">{Math.ceil(((progress.concluidos / progress.total) * 100))}% dos hábitos concluídos</span>
                }
            </DateContainer>
            {todayHabits.map(h => <HabitMaintence
                data-test="today-habit-container" 
                key={h.id}
                habito={h}
                setTodayHabits={setTodayHabits}
                todayHabits={todayHabits}
                carregaProgresso={carregaProgresso}
                salvaProgresso={salvaProgresso} />)}
        </TodayContainer>
    );
}