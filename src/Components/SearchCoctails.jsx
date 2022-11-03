import { React, useState, useEffect } from "react";
import "./SearchCoctails.scss"
import Ingridients from "./Ingridients";


export default function SearchCoctails() {

    const [coctailsData, setCoctailsData] = useState([])
    const [coctailName, setCoctailName] = useState(null)

    const loadCoctailByName = async() => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctailName}`)
        const data = await response.json()
        setCoctailsData(data.drinks)
        console.log(data.drinks)

    }

    const getCoctailName = (e) => {
        setCoctailName(e.target.value)
    }

    const loadCoctails = (event) => {
         event.preventDefault()
         loadCoctailByName()
    }


  return (
    <div className="main"> 
        <form id="form" onSubmit={loadCoctails}> 
               <> 
                    <label htmlFor="search">Search your favorite coctail by name!</label><br />
                    <input type="search" id="query" name="q" onChange={getCoctailName} placeholder="Search..."></input>
                    <button type="submit">Search</button>
                </>
                <> 
                     {coctailsData ? (
                     coctailsData.map(coctailData => {
                            return( 
                            <div className="coctail-card"> 
                            <div className="coctail-card-info">
                               <div><img src={coctailData.strDrinkThumb} alt="" /></div>
                            </div>
                            <div className="coctail-card-desc">
                                <div>{coctailData.strDrink}</div><br />
                                <div>{coctailData.strCategory} | {coctailData.strAlcoholic}</div><br />
                                <div>Glass: {coctailData.strGlass}</div><br />
                                <div>Instruction: {coctailData.strInstructions}</div><br />
                                <div><Ingridients name = {coctailData.idDrink}/></div>
                            </div>
                                
                                
                                {/* <div>{coctailData.strDrink}</div><br /> */}
                            </div>
                            )
                    })) : ""
                    }
                </>
        </form>
    </div>
  )
}



//   {coctailsData.map(coctailData => {
//                             return( 
//                             <>
//                                 <div>{coctailData.strDrink}</div><br />
//                                 <div>{coctailData.strCategory} | {coctailData.strAlcoholic}</div><br />
//                                 <div>Glass: {coctailData.strGlass}</div><br />
//                                 <div>Instruction: {coctailData.strInstructions}</div><br />
//                                 {/* <div>{coctailData.strDrink}</div><br /> */}
//                             </>
//                             )
//                     })}


//  coctailData ? (
//                      {coctailsData.map(coctailData => {
//                             return( 
//                             <div className="coctail-card"> 
//                             <div className="coctail-card-info">
//                                 <div>{coctailData.strDrink}</div><br />
//                                 <div>{coctailData.strCategory} | {coctailData.strAlcoholic}</div><br />
//                                 <div>Glass: {coctailData.strGlass}</div><br />
//                             </div>
//                             <div className="coctail-card-desc">
//                                 <div>Instruction: {coctailData.strInstructions}</div><br />
//                             </div>
                                
                                
//                                 {/* <div>{coctailData.strDrink}</div><br /> */}
//                             </div>
//                             )
//                     })}) : ""