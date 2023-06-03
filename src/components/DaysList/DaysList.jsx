import { DaysListContainer, StyledButton } from "./styled";
import { WEEK_DAYS } from "../../constants";

export default function DaysList(props) {
    const { chosedDays, setChosedDays } = props;

    return (
        <DaysListContainer>
            {WEEK_DAYS.map((d, indice) =>
            (
                <StyledButton
                    onClick={
                        () => (
                            setChosedDays(
                                (chosedDays.includes(indice))
                                ?
                                chosedDays.filter(i => i !== indice)
                                :
                                [...chosedDays, indice]
                            )
                        )}
                    key={indice}
                    isChosed={(chosedDays.includes(indice) ? true : false)}
                    data-test="habit-day">{d}
                </StyledButton>))}
        </DaysListContainer>
    )
}