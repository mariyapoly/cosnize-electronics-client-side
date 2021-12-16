import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LogInForm/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // create user using email password
    const createUserEmailPassword = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                navigate('/')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                setIsLoading(false)
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false))
    }
    //  signin user using email password
    const loginUserWithEmailPassword = (email, password, navigate, location) => {
        setIsLoading(true)
        const distination = location?.state?.from || '/';
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                navigate(distination)
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false))

    }
    // signOut user
    const signOutUser = () => {
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
        });
    }

    useEffect(() => {
        setIsLoading(true)
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError('')
            } else {
                setUser({})
            } setIsLoading(false)
        });

        return () => unsubscribed;

    }, [auth])

    return {
        user,
        error,
        createUserEmailPassword,
        loginUserWithEmailPassword,
        signOutUser,
        isLoading
    }


};

export default useFirebase;
