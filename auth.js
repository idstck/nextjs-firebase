import { createContext, useContext, useEffect } from "react"
import { getAuth } from "firebase/auth"

const AuthContext = createContext({})

export const AuthProvider = ({ child }) => {
    useEffect(()  => {
        const auth = getAuth();
        return auth.onIdTokenChanged(async(user) => {
            if (!user) {
                console.log('unauthenticated');
                return;
            }
            console.log('authenticated');
            const token = await user.getIdToken();
            console.log('token', token);
            console.log('user', user);
        })
    }, [])
    return (
        <AuthContext.Provider value={{}}>
            {child}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
