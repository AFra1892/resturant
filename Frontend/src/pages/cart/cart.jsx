import React, {useState , useEffect,  useContext } from "react";
import { OrderContext } from "../../context/order-context";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./cart-item";
import axios from "axios";
import './cart.css'
export const Cart = ()=>{
    const [menu,setMenu] = useState([])
    const {cartItems ,getTotalCartAmount, checkout} = useContext(OrderContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
    useEffect(()=>{
        axios
            .get('http://localhost:5555/foods')
            .then((res)=>{
                setMenu(res.data.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    },[])

    return(
        <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {menu.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
            //   navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
    );

}