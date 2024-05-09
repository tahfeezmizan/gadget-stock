import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {

    }

    return (
        <AuthContext.Provider value={ }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;