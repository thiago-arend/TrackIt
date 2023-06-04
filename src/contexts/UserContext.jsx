import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [profileImage, setProfileImage] =
        useState("https://static.wikia.nocookie.net/wikiesponja/images/4/41/180px-Spongebob-squarepants.png/revision/latest?cb=20120201005813&path-prefix=pt-br");
    const [dadosAddHabit, setDadosAddHabit] = useState(null);
    const [todayHabits, setTodayHabits] = useState([]);

    function setDone(done, id) {
        const array = todayHabits.map(p => {
            if (p.id === id) {
                p.done = done;
            }
            return p;
        });
        setTodayHabits([...array]);
    }

    function setCurSeq(value, id) {
        const array = todayHabits.map(p => {
            if (p.id === id) {
                p.currentSequence = value;
            }
            return p;
        });
        setTodayHabits([...array]);
    }

    function setHigSeq(value, id) {
        const array = todayHabits.map(p => {
            if (p.id === id) {
                p.highestSequence = value;
            }
            return p;
        });
        setTodayHabits([...array]);
    }

    const preparaConfig = () => {
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }

    return (
        <UserContext.Provider value={{
            setDadosAddHabit,
            dadosAddHabit,
            preparaConfig,
            token, setToken,
            profileImage,
            setProfileImage,
            setDone,
            setCurSeq,
            setHigSeq,
            setTodayHabits,
            todayHabits
        }}>
            {children}
        </UserContext.Provider>
    )
}