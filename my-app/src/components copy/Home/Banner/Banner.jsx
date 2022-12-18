import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

const Banner = () => {
    const [data,setData]=useState([])
useEffect(()=>{
    const getData = async()=>{
        let res=await axios.get("https://server1-b406.onrender.com/banner")
        console.log(res);
        setData(res.data)

    }
    getData()
},[])
  return (
    <>
{
    data.map((item)=>{
        return(
            <>
            <div className='banner'>
            <img  style={{ width:"100%",height:"350px"}}src={item.url} alt="banner" />            
            </div>
            </>
        )
    })
}
    </>
  )
}

export default Banner


