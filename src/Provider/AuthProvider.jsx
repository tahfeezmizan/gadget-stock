import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();

// social login 
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google 
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // github 
    const githubLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    // twitter 
    const twitterLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, twitterProvider);
    }

    // update user 
    const userProfileUpdate = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    // sing out user
    const logOut = () => {
        setUser(null);
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setIsLoading(false)
                console.log(currentUser)
            }
        });
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        isLoading,
        createUser,
        logInUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        userProfileUpdate,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;