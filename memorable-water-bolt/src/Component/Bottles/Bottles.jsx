import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import Bottle from "../../Bottle/Bottle";
// import Bottle from "../../Bottle/Bottle.css";
import './Bottles.css'
import { addToLS, getStorageCart, removeFromLS } from "../../Utilites/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    // load cart from local storage
    useEffect(()=>{
        console.log('called the useEffect',bottles.length);
        if(bottles.length > 0){
            const storedCart = getStorageCart();
            console.log(storedCart);
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    savedCart.push(bottle);
                }
            }

            console.log('Saved cart',savedCart);
            setCart(savedCart)
        }
    },[bottles])

    const [cart , setCart] = useState([]);

    const handleAddToCart = (bottle) =>{
        const newCarts = [...cart,bottle];
        setCart(newCarts);
        addToLS(bottle.id);
    }
    const handleRemoveFromCart = id =>{
        //visual remove
        const remainingCart = cart.filter(bottle => bottle.id !==id);
        setCart(remainingCart);
        //remove from LS
        removeFromLS(id);
    }

    return (
        <div >
            <h3>Memorable Bottle :{bottles.length} </h3>
            <Cart cart ={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <h3>Bottle : {cart.length}</h3>
            
            <div className="bottle-container">

            </div>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle 
                key={bottle.id}
                bottle={bottle}
                handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;