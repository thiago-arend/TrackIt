import { HabitMaintenceContainer } from "./styled";
import check from "../../assets/check.svg"

export default function HabitMaintence(props) {
    const {name, done, currentSequence, highestSequence} = props.habito;

    return (
        <HabitMaintenceContainer>
            <div>
                <h1>{name}</h1>
                <span>Sequência atual: {currentSequence} dias<br />Seu recorde: {highestSequence} dias</span>
            </div>
            <div>
                <img src={check} />
            </div>
        </HabitMaintenceContainer>
    );
}