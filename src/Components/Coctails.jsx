import React from 'react'
import { useState,useContext,useEffect } from 'react'
export default function Coctails() {

    const [coctails, setCoctails] = useState([])
    const loadCoctail = async() => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        const data = await response.json()
        setCoctails(data.drinks)
        console.log(data.drinks)
    }

    // useEffect(() => {
    //  loadCoctail()
    
      
    // }, [])
    


  return (
    <div>
        {coctails.map(coctail => {
            return <div>{coctail.strDrink}</div>
        })}
    </div>
  )
}
