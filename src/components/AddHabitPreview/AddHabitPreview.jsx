import { AddHabitPreviewContainer } from "./styled";

export default function AddHabitPreview() {
    return (
        <AddHabitPreviewContainer>
            <span>Meus hábitos</span>
            <button data-test="habit-create-btn" >+</button>
        </AddHabitPreviewContainer>
    );
}