import { createContext, useContext, useEffect, useState } from "react"
import { getAuth } from "firebase/auth"
import Loading from "/components/Loading";
import Login from "/components/Login";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()  => {
        const auth = getAuth();
        return auth.onIdTokenChanged(async(user) => {
            if (!user) {
                console.log('unauthenticated');
                setCurrentUser(null);
                setLoading(false);
                return;
            }
            console.log('authenticated');
            const token = await user.getIdToken();
            console.log('token', token);
            console.log('user', user);
            setCurrentUser(user);
            setLoading(false);
        })
    }, [])

    if(loading) {
        return <Loading type="spin" color="blue" />
    }

    if(!currentUser) {
        return <Login/>
    }

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
