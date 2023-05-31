import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import MyHabits from "./pages/MyHabitsPage/MyHabits";
import Today from "./pages/TodayPage/Today";
import History from "./pages/HistoryPage/History";
import Reset from "./style/Reset";

export default function App() {

  return (
    <>
      <Reset />
      
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/habitos" element={<MyHabits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<History />} />
      </Routes>

      </BrowserRouter>
    </>
  )
}
