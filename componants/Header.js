import Title from "./Title";
//import Logo from "../assets/img/e617f1bfb9af4d9cf132cd3dec0da072.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Login from "./Auth/Login/Login";
import { useAuth0 } from "@auth0/auth0-react";

const Header = (props) => {
  const { loginWithRedirect,logout,isAuthenticated,user,isLoading } = useAuth0();
 
  

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  const [isloggedin, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  //const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <div className="flex justify-between border h-28  sm:bg-white-100  ">
        <Title />
        <div></div>
        <div className="nav-items my-0.5 ">
          <ul className="flex py-4 px-4 z-[99]">
            <Link
              style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
              to="/"
            >
              <li className="px-2">
                <b>Home</b>
              </li>
            </Link>
            <Link
              style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
              to="/AboutUs"
            >
              <li>
                <b>About</b>
              </li>
            </Link>
            <Link
              style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
              to="/ContactUs"
            >
              <li>
                <b>Contact</b>
              </li>
            </Link>
            <Link
              style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
              to="/Cart"
            >
              <li data-testid="cart">
                <b>Cart {cartItems.length}</b>
              </li>
            </Link>
            <Link
              style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
              to="/Instamart"
            >
              <li>
                <b>Instamart</b>
              </li>
            </Link>
            <Link
              className="p-1 m-5 text-xl font-semibold"
              to="/gridwithtailwind"
            >
              <li>
                <b>GridWithTailWind</b>
              </li>
            </Link>
            <h4 data-testid="onlinestatus" className="p-2 m-2 text-2xl">
              {isOnline ? "💹" : "🟠"}
            </h4>
          </ul>
        </div>
        {isAuthenticated? <> <h2 className="text-gray-900 text-xl">{user.name}<br/>{user.email}<br/>
        <button
         className="text-black bg-blue-100 text-2xl font-bold  rounded-lg p-2"
         onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
    </button></h2>
    <div>
        
       
      </div></>  :<button
          className="px-5 py-2 mx-2 my-7 h-14 text-black bg-blue-100 text-2xl font-bold  rounded-lg"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>}
        

       
    
     
        {/* <h1 className="p-10 font-bold text-red-900 ">{user.name}</h1> */}

        {/* {isloggedin ? (
          <Link
          to="/login"
            className="px-5 py-2 mx-2 my-7 h-14 text-black text-2xl font-bold  rounded-lg"
            onClick={() => setLoggedIn(false) && loginWithRedirect()}
          >
          
          Login
          </Link>
          
        ) : (
       
          <Link
          to="/signup"
            className="px-5 py-2 mx-2 my-7 h-14 text-2xl font-bold text-black rounded-lg"
            onClick={() => setLoggedIn(true)}
          > 
            Logout
          </Link>
        )} */}
        {/* <h1>{props.name? `Welcome -${props.name}`:"Login Please"}</h1> */}
      </div>
    </div>
  );
};
export default Header;
