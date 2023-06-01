import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import AddHabitPreview from "../../components/AddHabitPreview/AddHabitPreview";
import AddHabit from "../../components/AddHabit/AddHabit";
import HabitsCreationStatus from "../../components/HabitsCreationStatus/HabitsCreationStatus";
import HabitPlanning from "../../components/HabitPlanning/HabitPlanning";

export default function MyHabits() {
    return (
        <>
            <NavBar />
            <AddHabitPreview />
            {/*<AddHabit />*/}
            <HabitPlanning />
            <HabitsCreationStatus />
            <Footer />
        </>
    );
}