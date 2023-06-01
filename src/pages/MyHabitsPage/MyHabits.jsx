import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import AddHabitPreview from "../../components/AddHabitPreview/AddHabitPreview";
import AddHabit from "../../components/AddHabit/AddHabit";
import HabitsCreationStatus from "../../components/HabitsCreationStatus/HabitsCreationStatus";

export default function MyHabits() {
    return (
        <>
            <NavBar />
            <AddHabitPreview />
            <AddHabit />
            <HabitsCreationStatus />
            <Footer />
        </>
    );
}