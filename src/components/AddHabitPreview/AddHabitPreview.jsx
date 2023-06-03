import { AddHabitPreviewContainer } from "./styled";

export default function AddHabitPreview(props) {
    const {setShowAddHabit} = props;

    return (
        <AddHabitPreviewContainer>
            <span>Meus hábitos</span>
            <button onClick={() => setShowAddHabit(true)} data-test="habit-create-btn" >+</button>
        </AddHabitPreviewContainer>
    );
}