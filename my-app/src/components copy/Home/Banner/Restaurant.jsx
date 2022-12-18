
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import "./Restaurant.css"
import { NavLink } from 'react-router-dom'
const Restaurant = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
    const getData = async()=>{
        let res=await axios.get("https://reduxapi.onrender.com/restaurants")
        console.log(res);
        setData(res.data)

    }
    getData()
},[])
return (
    <>
    <div className='nam'>
<div className='livess'>

<h1  style={{fontSize:"30px"}}>Discover Restaurants</h1>

<h2 id='dir'>
    <a href="">Vegetarian Directory</a>
    <a href="">Restaurant Menu</a>
   
</h2>
</div>
    <div className='cold'>
    

{   data.map((items,title)=>{
    return (
        <div>
        
            <div className='imgg'>
            <NavLink state={{ img:items.url ,title:items.title}} to="/rest" >

        <img  src={items.url} alt=""/>
            </NavLink>
             </div>
        <p>{items.title}</p>
    </div>
    )
   })}
    </div>
    </div>
    </>
)
}

export default Restaurant