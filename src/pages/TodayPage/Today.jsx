import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import HabitDate from "../../components/HabitDate/HabitDate";
import HabitMaintence from "../../components/HabitMaintence/HabitMaintence";
import { HabitMaintenceListContainer } from "./styled"

export default function Today() {
    return (
        <>
            <NavBar />
            {/*<HabitDate />*/}
            <HabitMaintenceListContainer>
                <HabitMaintence />
            </HabitMaintenceListContainer>
            <Footer />
        </>
    );
}