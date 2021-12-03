import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import navImg from '../assets/nav.png'
import axios from 'axios'

export default function NewBeer(props){
    
    const [formState, setFormState] = useState({})

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formState)
        .then((res)=>{
            console.log(res)
            setFormState({})
        })
        .catch(console.log)
    }

    const handleInput = (e)=>{
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    const clear = (e)=>{
        setFormState({})
    }
    
    
    return (
        <div>
            <header>
                <Link to='/'><img src={navImg} alt="Home"></img></Link>
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleInput} value={formState.name}></input>

                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" onChange={handleInput} value={formState.tagline}></input>

                <label htmlFor="description">Description</label>
                <input type="text" name="description" onChange={handleInput} value={formState.description}></input>

                <label htmlFor="first_brewed">First Brewed</label>
                <input type="text" name="first_brewed" onChange={handleInput} value={formState.first_brewed}></input>
            
                <label htmlFor="brewers_tips">Brewer Tips</label>
                <input type="text" name="brewers_tips" onChange={handleInput} value={formState.brewers_tips}></input>
            
                <label htmlFor="attenuation_level">Attenuation Level</label>
                <input type="number" name="attenuation_level" onChange={handleInput} value={formState.attenuation_level}></input>
            
                <label htmlFor="contributed_by">Contributed by</label>
                <input type="text" name="contributed_by" onChange={handleInput} value={formState.contributed_by}></input>
           
                <button type="submit">Create a new Beer</button>
            </form>

        </div>
        
    )
}