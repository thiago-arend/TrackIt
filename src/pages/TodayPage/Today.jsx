import HabitDate from "../../components/HabitDate/HabitDate";
import HabitMaintence from "../../components/HabitMaintence/HabitMaintence";
import { TodayContainer, DateContainer } from "./styled"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { URL_BASE, WEEK_DAYS_FULL } from "../../constants";
import dayjs from "dayjs";

export default function Today() {
    const {preparaConfig, setProgress, progress} = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);
    const date = {
        d: dayjs().format("DD"),
        m: dayjs().format("MM"),
        dSemana: WEEK_DAYS_FULL[dayjs().format("d").toString()]
    };

    useEffect(() => {
        axios.get(`${URL_BASE}/habits/today`, preparaConfig())
            .then((res) => {
                console.log(res.data);
                setTodayHabits(res.data);
                carregaProgresso(0, res.data);
            })
            .catch((err) => {
                console.log(err);
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
        <>
            {/*<HabitDate />*/}
            <TodayContainer>
                <DateContainer alteraSpan={progress.concluidos > 0}>
                    <h1>{date.dSemana}, {date.d}/{date.m}</h1>
                    {
                        (progress.concluidos === 0)
                        ?
                        <span>Nenhum hábito concluído ainda</span>
                        :
                        <span>{Math.ceil(((progress.concluidos / progress.total)*100))}% dos hábitos concluídos</span>
                    }
                </DateContainer>
                {todayHabits.map(h => <HabitMaintence 
                                        key={h.id}
                                        habito={h}
                                        setTodayHabits={setTodayHabits}
                                        todayHabits={todayHabits}
                                        carregaProgresso={carregaProgresso} />)}
            </TodayContainer>
        </>
    );
}