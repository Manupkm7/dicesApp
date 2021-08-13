import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import AddRecipe from './Components/AddRecipe/AddRecipe';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import RecipeDetail from './Components/RecipeDetail/RecipeDetail';
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path= '/home' component={Nav}/>
       <Route exact path='/' component={Landing}/>
       
       <Route exact path='/home' component={Home}/>
       <Route path='/recipe/:id' component={RecipeDetail} />
       <Route path='/addRecipe' component={AddRecipe}/>
       </BrowserRouter>
    </div>
  );
}

export default App;
