import React from 'react'
import {Link} from 'react-router-dom'
import recipe from '../../Img/recipe.jpg'
import './RecipeContainer.css'
const RecipeContainer = (props) => {
    return (
        <div className='card_container'>
            <h1>{props.recipe.title}</h1>
            <div className='image_recipe'>
                <img src={props.recipe.image ? props.recipe.image : `${recipe}`} alt='imagen' />
            </div>
            <div className='diets_card'>
                {props.recipe.diets.map((diet,index)=>(
                <span key={index}>
                <p key={index}>{diet}</p> 
                </span>))}
            </div>
            <Link to={`/recipe/${props.recipe.id}`}>
                <button className='button_card' type='submit'>Leer más</button>
            </Link>
        </div>
    )
}

export default RecipeContainer
