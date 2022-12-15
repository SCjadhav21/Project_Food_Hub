


import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import "./News.css"
const Restaurant = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
    const getData = async()=>{
        let res=await axios.get("https://server1-b406.onrender.com/restaurants")
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
        <img  src={items.url} alt=""/>
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