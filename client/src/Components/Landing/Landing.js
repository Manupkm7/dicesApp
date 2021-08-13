import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDiets } from '../../Redux/Actions/dietsActions';
import { getRecipes } from '../../Redux/Actions/recipesActions';
import './Landing.css'

function Landing(){
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getDiets())
        dispatch(getRecipes())
    })
    
    return(
        <div className='landing_container'>
            <h1 className='h1_welcome'>Bienvenido!</h1>
            <button className='button_home'><Link to='/home' className='link_text'>Inicio</Link></button>
        </div>
    )
}

export default Landing

