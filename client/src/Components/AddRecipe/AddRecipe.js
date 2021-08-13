import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createRecipe } from '../../Redux/Actions/recipesActions';
import { getDiets } from '../../Redux/Actions/dietsActions';
import { validate } from './Error';
import Nav from '../Nav/Nav'
import './AddRecipe.css'


const AddRecipe = () => {
    const dispatch = useDispatch()
    const {diets} = useSelector(state=>state)

    useEffect(() => {
       dispatch(getDiets())
       
    }, [dispatch])

    const [input, setInput] = useState({
        title: '',
        summary: '',
        spoonacularScore: 0,
        healthScore: 0,
        analyzedInstructions: '',
        image: '',
        diets: []
    })

    const [error, setError] = useState({})

    const handleInputChange = function(e){
        if(e.target.value === 'diets'){
            const dietsSelection = input[e.target.name]
            setInput({
                ...input,
                [e.target.name]: dietsSelection.concat(e.target.value)
            })
        }else{
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
            setError(
                validate({
                    ...input,
                    [e.target.name]: e.target.value
                })
            )
        }
    }

    const handleCheckbox = (e)=>{
        if(e.target.checked){
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        }else{
            setInput({
                ...input,
                diets: input.diets.filter((diet)=>diet !== e.target.value)
            })
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(Object.keys(error).length === 0){
            dispatch(createRecipe(input))
            alert("¡Su receta fue creada exitosamente!")
            setInput({
                title: '',
                summary: '',
                spoonacularScore: 0,
                healthScore: 0, 
                analyzedInstructions: '',
                image: '', 
                diets: []
                })
        }else{
            alert("Faltan ingredientes :(")
        }
    }

    return (
        <div className='add_container'>
            <Nav />
            <h1 className='h1_title'>Creacion de recetas: </h1>
            <form className='recipe_form' onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label className='title_form'>Titulo</label>
                <input onChange={handleInputChange} className={`${error.title && "danger"}`} type='text' name='title' value={input.title}/>
                {error.title && (<p className='danger'>{error.title}</p>)}
            </div>
            <div>
                <label className='resume_form'>Resumen</label>
                <input onChange={handleInputChange} className={`${error.summary && "danger"}`} type='text' name='summary' value={input.summary}/>
                {error.summary && (<p className='danger'>{error.summary}</p>)}
            </div>
            <div>
                <label className='score_form'>Puntuación</label>
                <input onChange={handleInputChange} className={`${error.spoonacularScore && "danger"}`} type='numer' min='0' max='50' name='spoonacularScore' value={input.spoonacularScore}/>
                {error.spoonacularScore && (<p className='danger'>{error.spoonacularScore}</p>)}
            </div>
            <div>
                <label className='score_form'>Puntuación Saludable</label>
                <input onChange={handleInputChange} className={`${error.healthScore && "danger"}`} type='numer' min='0' max='50' name='healthScore' value={input.healthScore}/>
                {error.healthScore && (<p className='danger'>{error.healthScore}</p>)}
            </div>
            <div className='margin'>
                <label className='instructions_form'>Instrucciones</label>
                <textarea onChange={handleInputChange} className='text_input' name='analyzedInstructions' value={input.analyzedInstructions} />
            </div>
            <div>
                <label className='image_form'>Imagen</label>
                <input type='url' name='image' placeholder='Inserte una url con una imagen' value={input.image} onChange={handleInputChange} className='text_input'/>
            </div>
            <div className='diets_checkbox'>
                <label className='check_input'>Elige una opcion</label>
                <div className='map_diets'>
                    {diets.map((diet)=>(
                        <span className='keys' key={diet.name}>
                            <input className='input_diets' type='checkbox' name='diets' value={diet.id} onChange={handleCheckbox} />
                            <label name={diet}>{diet.name}</label>
                        </span>
                    ))}
                </div>
            </div>
            <button className='submit_button' type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default AddRecipe
