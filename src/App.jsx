import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import MyHabits from "./pages/MyHabitsPage/MyHabits";
import Today from "./pages/TodayPage/Today";
import History from "./pages/HistoryPage/History";
import Reset from "./style/Reset";
import GlobalStyle from "./style/GlobalStyle";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./contexts/UserContext";
import HabitsDay from "./pages/HabitsDayPage/HabitsDay";

export default function App() {

  return (
    <UserProvider>
      <Reset />
      <GlobalStyle />

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<MyHabits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
          <Route path="/habitosDia" element={<HabitsDay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  )
}
