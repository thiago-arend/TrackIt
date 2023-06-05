import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [todayHabits, setTodayHabits] = useState([]);
    const [profileImage, setProfileImage] = useState("");
    const [dadosAddHabit, setDadosAddHabit] = useState(null);
    const [progress, setProgress] = useState({
        total: 0,
        concluidos: 0
    });

    return (
        <UserContext.Provider value={{
            setDadosAddHabit,
            dadosAddHabit,
            token, 
            setToken,
            profileImage,
            setProfileImage,
            progress,
            setProgress,
            todayHabits,
            setTodayHabits
        }}>
            {children}
        </UserContext.Provider>
    )
}