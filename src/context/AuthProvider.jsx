import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import auth from '../config/firebase.config'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useEffect } from 'react'
export const authContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // google login 
    const googleLogInUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLoginUser = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])



    const authInformation = { user, registerUser, loginUser, logOutUser, googleLogInUser, githubLoginUser, loading }
    return (
        <authContext.Provider value={authInformation}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider