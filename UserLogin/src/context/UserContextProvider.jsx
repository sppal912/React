import React from "react";
import UserContext from "./UserContex";

const UserConPro = ({children}) => {
const [user, setUser] = React.useState(null);
return(
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
)
}
export default UserConPro;