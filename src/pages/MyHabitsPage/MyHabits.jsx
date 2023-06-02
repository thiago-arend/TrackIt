import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import AddHabitPreview from "../../components/AddHabitPreview/AddHabitPreview";
import AddHabit from "../../components/AddHabit/AddHabit";
import HabitsCreationStatus from "../../components/HabitsCreationStatus/HabitsCreationStatus";
import HabitPlanning from "../../components/HabitPlanning/HabitPlanning";
import { MyHabitsContainer } from "./styled";

export default function MyHabits() {
    return (
        <MyHabitsContainer>
            <AddHabitPreview />
            {/*<AddHabit />*/}
            <HabitPlanning />
            <HabitsCreationStatus />
        </MyHabitsContainer>
    );
}