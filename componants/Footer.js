import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const {user}=useContext(UserContext);
    return <h4 className="flex m-52 p-96  text-xl font-extralight underline">{user.name}  - {user.email}  </h4>  ;
  };

    export default Footer;
   