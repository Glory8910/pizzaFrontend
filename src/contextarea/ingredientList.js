import React, { createContext, useContext, useReducer, useState } from "react"
import axios from "axios"



import Ingredientcontext from "./Ingredientcontext"



export const  IngredientList= props=>{

   

    const [items,setItems] = useState({
        itemsSelected: [
            {
                name: "Chicken",
                price: 50
            },
            {
                name: "Mutton",
                price: 80
            },
            {
                name:"Peparoni",
                price: 45
            },
            {
                name:"Tomato",
                price: 45
            },
            {
                name:"Capsicum",
                price: 45
            },
            {
                name:"Olive",
                price: 45
            },
            {
                name:"Onion",
                price: 45
            },
            {
                name:"Mushroom",
                price: 45
            },
            {
                name:"Basil",
                price: 45
            },
            
            
        ],
        BaseSelected: "",
        CheeseSelected: "",
        SauceSelected: "",
        VeggSelected: [],
        MeatSelected: [],
        totalCost: 280
        
    });
    const [payment, setpayment] = useState(false);
    const [orderlist,setorderlist]=useState([]);

const [stock,setstock]=useState([

    {
        name: "Chicken",
        price: 50,
        stock:0
    },
    {
        name: "Mutton",
        price: 80,
        stock:0
    },
    {
        name:"Peparoni",
        price: 45,
        stock:0
    },
    {
        name:"Tomato",
        price: 45,
        stock:0
    },
    {
        name:"Capsicum",
        price: 45,
        stock:0
    },
    {
        name:"Olive",
        price: 45,
        stock:0
    },
    {
        name:"Onion",
        price: 45,
        stock:0
    },
    {
        name:"Mushroom",
        price: 45,
        stock:0
    },
    {
        name:"Basil",
        price: 45,
        stock:0
    },
    
]
)

const [meat,setmeat]=useState()

let handelesetmeat=(e)=>{
    setmeat([...meat,e])
}

let handeledelmeat=(e)=>{
    setmeat([meat.filter(e.target.value)])
}

    console.log(stock)
    return (
      
        <Ingredientcontext.Provider value={{stock,setstock,items,setItems,payment, setpayment,orderlist,setorderlist}}>

            {props.children}

        </Ingredientcontext.Provider>

    );

};
