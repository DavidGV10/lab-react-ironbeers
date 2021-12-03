import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios'
import navImg from '../assets/nav.png'
export default function Beers(props){

    const [beers, setBeers] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("")

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((res)=> {
            setBeers(res.data)
            setIsLoading(false)
        })
        .catch(console.log)
    }
    ,[])
    const handleInput = (e)=>{
        setSearch(e.target.value)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
        .then(res=>setBeers(res.data))
    }
       
    return (
        
        <div>
            <header>
                <Link to='/'><img src={navImg} alt="Home"></img></Link>
            </header>
            <div>Search a Beer: <input type="text" name="search" onChange={handleInput} value={search}/></div>
            <div className="beerContainer">
                {isLoading === false && beers.map((a)=>{
                   return (
                       <div className="beer">
                           
                            {<Link to={`/beers/${a._id}`}><img src={a.image_url} alt={a.name} height="200px"/></Link>}
                            <div>
                                <p>{a.name}</p>
                                <p>{a.tagline}</p>
                                <p>Created by:{a.contributed_by}</p>
                            </div>
                       </div>
                   )
                })}
            </div>
        </div>
    )
}