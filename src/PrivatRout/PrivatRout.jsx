import { useContext } from "react";
import { AuthContaxt } from "../contextProvider/ContactProvider";
import { Navigate } from "react-router-dom";

const PrivatRout = ({children}) => {
    const {user, loading} = useContext(AuthContaxt);
    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    if (user){
        return children;
    }
    return <Navigate to='/login'>L</Navigate>
        
}
 
export default PrivatRout;