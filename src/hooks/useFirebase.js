import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LogInForm/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();

    // create user using email password
    const createUserEmailPassword = (email, password, name, navigate) => {

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
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    //  signin user using email password
    const loginUserWithEmailPassword = (email, password, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                navigate('/')
            })
            .catch((error) => {
                setError(error.message);
            });

    }
    // signOut user
    const signOutUser = () => {
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
        });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError('')
            } else {
                setUser({})
            }
        });

        return () => unsubscribed;

    }, [auth])

    return {
        user,
        error,
        createUserEmailPassword,
        loginUserWithEmailPassword,
        signOutUser
    }


};

export default useFirebase;
