import React from 'react'
import { useState,useEffect } from 'react'
export default function Ingridients(props) {

    const [ingredients, setIngredients] = useState([])
    const loadIngredients = async() => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.name}`)
        const data = await response.json()
        setIngredients(data.drinks)
        console.log(data)
        console.log(data.drinks[0].strIngredient1)

    }

    useEffect(() => {
      loadIngredients()
    
     
    }, [])

    // const loadCurrentIngredient = async() => {
    //     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${}`)
    //     const data = await response.json()
    // }
    
  return (
    <div>INGREDIENTS: 
        {
            ingredients.map(ingredient => {
                  
                         return (
                         <>
                            <div>{ingredient.strIngredient1}</div>
                            <div>{ingredient.strIngredient2}</div> 
                            <div>{ingredient.strIngredient3}</div> 
                            <div>{ingredient.strIngredient4}</div> 
                            <div>{ingredient.strIngredient5}</div> 
                            <div>{ingredient.strIngredient6}</div> 
                            <div>{ingredient.strIngredient7}</div> 
                            <div>{ingredient.strIngredient8}</div> 
                            <div>{ingredient.strIngredient9}</div> 
                            <div>{ingredient.strIngredient10}</div> 
                            <div>{ingredient.strIngredient11}</div> 
                            <div>{ingredient.strIngredient12}</div> 
                            <div>{ingredient.strIngredient13}</div> 
                            <div>{ingredient.strIngredient14}</div>
                            <div>{ingredient.strIngredient15}</div>
                        </>)
            })
        }
    </div>
  )
}
