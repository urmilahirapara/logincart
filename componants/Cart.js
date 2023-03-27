import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem"
import {clearCart} from "../utils/cartSlice";
const Cart=()=>{    
    const dispatch=useDispatch((store)=>store.cart.items.length);
    const cartItems = useSelector((store) => store.cart.items);
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return <div>
        <h1 className="font-bold text-3xl ">Cart Items--{cartItems.length}</h1>
        <button className="bg-green-100" onClick={()=>handleClearCart()}>Clear Items</button>
       <div className="grid-flow-col flex">
       <div className="col-span-12">
       {cartItems.map(item => <FoodItem key={item.id} {...item}/>)}
       </div>
       </div>
        
    </div>

}
export default Cart;