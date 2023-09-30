import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Rout = () => {
    return ( 
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>
     );
}
 
export default Rout;