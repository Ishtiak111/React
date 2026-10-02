import { useState } from "react";

export default function Cart(){
    // let counter = 0;
    const[counter, setCounter] = useState(0)
    const add = () =>{
        setCounter(counter+1);
    }
    const decrease = () => {
        if(counter>0){
            setCounter(counter-1)
        }
    }
    return(
        <div>
            <h3>Shopping Cart</h3>
            <p>Items in the cart: {counter}</p>
            <button onClick={add}>Increase 1</button>
            <button onClick={decrease}>Decrease 1</button>
        </div>
    )
}