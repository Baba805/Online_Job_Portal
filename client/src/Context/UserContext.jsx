import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({children}) => {
   const [user, setUser] = useState(null);
   useEffect(()=>{
    if (localStorage.getItem('user')) {
        setUser(localStorage.getItem('user'));
    }
   },[])
    const values = [
        user,setUser
    ]
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}
const AdminContext = createContext();

// eslint-disable-next-line react/prop-types
export const AdminContextProvider = ({children}) => {
   const [admin, setAdmin] = useState(null);
   useEffect(()=>{
    if (localStorage.getItem('admin')) {
        setAdmin(JSON.parse(localStorage.getItem('admin')));
    }
   },[])
    const values = [
        admin,setAdmin
    ]
    return (
        <AdminContext.Provider value={values}>
            {children}
        </AdminContext.Provider>
    )
}

export const useAdminContext = ()=> useContext(AdminContext);

export const useUserContext = ()=> useContext(UserContext);