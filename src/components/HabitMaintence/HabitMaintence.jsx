import { HabitMaintenceContainer } from "./styled";
import check from "../../assets/check.svg"

export default function AddHabitPreview() {
    return (
        <HabitMaintenceContainer>
            <div>
                <h1>Ler 1 capítulo de livro</h1>
                <span>Sequência atual: 3 dias<br />Seu recorde: 5 dias</span>
            </div>
            <div>
                <img src={check} />
            </div>
        </HabitMaintenceContainer>
    );
}