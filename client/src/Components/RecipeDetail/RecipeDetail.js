import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail } from '../../Redux/Actions/recipesActions';
import recipeImage from '../../Img/recipe.jpg';
import Nav from '../Nav/Nav'
import './RecipeDetail.css'


const RecipeDetail = ({match}) => {
    const recipe = useSelector((state)=>state.recipeById)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecipeDetail(match.params.id))
    }, [dispatch, match.params.id])
    

    function summary(){
        return {__html: recipe.summary}
    }
    return (
        <div className='details_container'>
            <Nav />
            <h1>{recipe.title}</h1>
            <div className='details'>
                <div className='image_detail'>
                    <img src={recipe.image ? recipe.image : `${recipeImage}`} alt='imagen' />
                </div>
                <div className='scoreDiv'>
                    <span className='description_score'>Puntuacion: {recipe.spoonacularScore}</span>
                    <span className='description_score'>Puntuacion Saludable: {recipe.healthScore}</span>
                </div>
                <div className="text">
                    <div className="diets">
                        <div className ="diets_name" style={{textTransform: 'uppercase'}}>
                            {recipe.diets?.map((diet) => (<span key={diet}>{diet}</span>))}
                        </div>
                    </div>
                    <div className="summary">
                        <h2>Resumen</h2>
                    </div>
                    <div dangerouslySetInnerHTML={summary()} className="description" />
                    <div className="instructions">
                        <h2>Instrucciones</h2>
                        <p className="description" key={recipe.id}>{recipe.analyzedInstructions?.map((inst) => (
                        <ul><li>{inst}</li></ul>))}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail
