import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import "../../../style/Banners.css"
const Banners = () => {
    const [data,setData]=useState([])
useEffect(()=>{
    const getData = async()=>{
        let res=await axios.get("https://reduxapi.onrender.com/banners")
        console.log(res);
        setData(res.data)

    }
    getData()
},[])
return (
    <>
    <div className='banners'>
{   data.map((items)=>{
    return (
        <div className='images'>
        <img  src={items.url} alt=""/>
    </div>
    )
   })}
  
    </div>
    </>
)
}

export default Banners