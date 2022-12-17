
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import "./News.css"
import { NavLink } from 'react-router-dom'
const Restaurant = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
    const getData = async()=>{
        let res=await axios.get("http://localhost:8080/restaurants")
        console.log(res);
        setData(res.data)

    }
    getData()
},[])
return (
    <>
    <div className='new'>
<div className='lives'>

<h1>Discover Restaurants</h1>
<h2>
    <a href="">Vegetarian Directory</a>
    <a href="">Restaurant Menu</a>
   
</h2>
</div>
    <div className='news'>
    

{   data.map((items,title)=>{
    return (
        <div>
        
            <div className='img'>
            <NavLink state={{ img:items.url ,title}} to="/rest" >

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