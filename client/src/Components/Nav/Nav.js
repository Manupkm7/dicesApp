import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { NavLink} from 'react-router-dom';
import logo from '../../Img/logo.jpg'
import './Nav.css'


//Actions
import { getRecipes, searchRecipes } from '../../Redux/Actions/recipesActions';
import { reset } from '../../Redux/Actions/orderActions';



export default function Nav(){
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    const handleOnChange = (e)=>{
        setTitle(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(searchRecipes(title))
        setTitle('')
    }

    return(
        <div className='nav_container'>
            <div className='nav_routes'>
            <NavLink to='/home'>
                <img className='nav_logo' src={logo} alt='logoinicio' onClick={(e)=>dispatch(reset(),getRecipes())} />
            </NavLink>
            <NavLink to='/addRecipe'>
                <button className='create_recipe' type='submit'>Crear Receta</button>
            </NavLink>
            <div className='box'>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input className='input' name='search' onChange={(e)=>handleOnChange(e)} type='text' value={title} placeholder='' />
                    <button className='search_button' type='submit'>Buscar</button>
                </form>
            </div>
            </div>
        </div>
    )





}