import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, getIdToken, updateProfile , signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('');



    const auth = getAuth();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('')
          const newUser = {email, displayName: name}
          setUser(newUser)
          // save user to the database
          saveUser(email, name);

          // send name
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          history.replace('/')
          })
          .catch((error) => {
            setAuthError(error.message)
            
          })
          .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/'
    history.replace(destination)
    setAuthError('')
  })
  .catch((error) => {
    setAuthError(error.message)
  })
  .finally(() => setIsLoading(false));

    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user)
              .then(idToken => {
                setToken(idToken);
              })
            } else {
                setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[])

    useEffect(() =>{
      fetch(`https://frozen-springs-24177.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    },[user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false))
    }

    const saveUser = (email, displayName) =>{
      const user = {email, displayName};
      fetch('https://frozen-springs-24177.herokuapp.com/users', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }
    return{
        user,
        admin,
        token,
        isLoading,
        registerUser,
        authError,
        loginUser,
        logout,
    }
}

export default useFirebase;