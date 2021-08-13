import React from 'react'
import RecipeContainer from '../RecipeContainer/RecipeContainer'
import './DisplayRecipes.css'

function DisplayRecipes(props){
    return (
        <div className='display_recipes'>
            {props.recipes.map((recipe, index)=>(
             <RecipeContainer key={index} index={index} recipe={recipe} />   
            ))}
        </div>
    )
}

export default DisplayRecipes