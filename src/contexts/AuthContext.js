// to be able to see the data that we are getting back either from google we need to use react-context
// more specifically we will be using a user-context to manage all of our user info


import React, {useContext, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext();

//function to export our context
export const useAuth = () => useContext(AuthContext);


//react children will render all of the jsx that we will pass into the AuthProvider
export const AuthProvider = ({ children }) => {
    //setting up states
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);  //for adding a user, initially null
    const history= useHistory();  //for re-navigating

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);  //once we get the user-data, we are no longer loading
            
            if(user) history.push('/chats'); //if we have a user, only then redirect to chats
        } ) 
    }, [user, history]); //dependency array/list, when things(user, history) in this list change then the function (useEffect) will be recalled

    const value = { user };

    return(
        <AuthContext.Provider value={value}>
            { !loading && children} {/*if not loading then show the children */}
        </AuthContext.Provider>
    )
}