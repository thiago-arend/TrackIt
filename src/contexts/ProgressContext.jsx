import { createContext, useState } from 'react';

export const UserContext = createContext();

export const ProgressProvider = ({ children }) => {
    const [totalHabitos, setTotalHabitos] = useState(null);
    const [profileImage, setProfileImage] = useState(0);
        useState("https://static.wikia.nocookie.net/wikiesponja/images/4/41/180px-Spongebob-squarepants.png/revision/latest?cb=20120201005813&path-prefix=pt-br");

    return (
        <UserContext.Provider value={{ token, setToken, profileImage, setProfileImage }}>
            {children}
        </UserContext.Provider>
    )
}