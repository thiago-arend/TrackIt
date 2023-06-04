import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [profileImage, setProfileImage] = useState("");
    const [dadosAddHabit, setDadosAddHabit] = useState(null);
    const [progress, setProgress] = useState({
        total: 0,
        concluidos: 0
    });

    //const [progress, setProgress] = useState([]);

    /*function setDone(done, id) {
        const array = progress.map(p => {
            if (p.id === id) {
                p.done = done;
            }
            return p;
        });
        setProgress([...array]);
    }

    function setCurSeq(value, id) {
        const array = progress.map(p => {
            if (p.id === id) {
                p.currentSequence = value;
            }
            return p;
        });
        setProgress([...array]);
    }

    function setHigSeq(value, id) {
        const array = progress.map(p => {
            if (p.id === id) {
                p.highestSequence = value;
            }
            return p;
        });
        setProgress([...array]);
    }*/

    return (
        <UserContext.Provider value={{
            setDadosAddHabit,
            dadosAddHabit,
            token, 
            setToken,
            profileImage,
            setProfileImage,
            progress,
            setProgress
        }}>
            {children}
        </UserContext.Provider>
    )
}