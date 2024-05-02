import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const recipes = [

  {
  
  name: 'Spaghetti Bolognese',
  
  ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onion', 'Garlic', 'Oregano'],
  
  },
  
  {
  
  name: 'Chicken Alfredo Pasta',
  
  ingredients: ['Fettuccine pasta', 'Chicken breast', 'Heavy cream', 'Parmesan cheese', 'Garlic'],
  
  },
  
  {
  
  name: 'Vegetarian Stir Fry',
  
  ingredients: ['Broccoli', 'Carrots', 'Bell peppers', 'Tofu', 'Soy sauce', 'Ginger'],
  
  },
  
  // Add more recipes as needed
  
  ];

function App() {

  async function getData(){
    let data = axios.get("URL")
    
    return data.data
  }


  return (
    <>
    {/* <ul>
    {recipes.map((el,index)=>{
      return <li key={`${index,Date.now}`} ><h2>{el.name}</h2>
                    <p>Ingredients:{el.ingredients.map(el=><li key={el}>{el}</li>)}</p>
      </li>
    })}

    </ul> */}

    </>
  )
}

export default App
