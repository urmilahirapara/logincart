import {Component} from "react";
import  Profile  from "./ProfileClass";
import UserContext from "../utils/UserContext";

class AboutUs extends Component {
  constructor(props) 
  {
    super(props);
  }
  render()
  {
    return(   
          <div>
          <h1>About My Self</h1>
 
         <UserContext.Consumer>
          {({user})=><h4 className="font-bold text-xl p-10">{user.name}  - {user.email}</h4>}
        </UserContext.Consumer> 
          <Profile />
        </div>
          )
  }  
} 
  export default AboutUs;
