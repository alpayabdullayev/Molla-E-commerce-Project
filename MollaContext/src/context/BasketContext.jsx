import { createContext, useState } from "react";


export const BasketContext = createContext()

import React from 'react'
import useLocalStorage from "../hooks/useLocalStorage";

const BasketProvider = ({children}) => {

    const [basket, setBasket] = useLocalStorage('basket')


    const handleBasket = (item) => {
    console.log("item",item);

        const elementIndex = basket.findIndex((x) => x.id === item.id);
        if (elementIndex !== -1) {
          const newBasket = [...basket]
          newBasket[elementIndex].count++;
          setBasket(newBasket);
        //   console.log(newBasket);

        console.log(basket);
        } else {
          setBasket([...basket, { ...item, count: 1 }]);
        }
    }

    function handleRemove(id) {
        setBasket(basket.filter(item=>item.id !== id))
    }

    function handleCountVal(isAdd,item) {
        const elementIndex = basket.findIndex((x)=>x.id ===item.id)
        const newBasket =  [...basket]
        if(isAdd){
            newBasket[elementIndex].count++
            setBasket(newBasket)
        }
        else{
            if (newBasket[elementIndex].count === 1) {
                return
            }
            newBasket[elementIndex].count--
            setBasket(newBasket)
        }
    }


    const data = {
        basket,setBasket,handleBasket,handleRemove,handleCountVal
    }


  return (


   

    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider   