import { useContext } from "react";
 import UserContext from "../context/UserContex";
  function Profile () {
    const {user} = useContext(UserContext)
    if(!user || user === ""){
      return <div>Please Login</div>
    } else{
      return <div>WELCOME {user.username}</div>
    }
  }
  export default Profile;