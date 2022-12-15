
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import"./Meals.css"
import Pagination from "./Pagination"
const Meals = () => {
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
useEffect(()=>{
    const getData = async()=>{
        let res=await axios.get(`https://server1-b406.onrender.com/meal?_page=${page}&_limit=10`)
        console.log(res);
        setData(res.data)

    }
    getData()
},[page])
return (
    <>
    <Pagination total={5} current={page} onchange={(value) =>setPage(value)} />
    <div className='meals'>
{   data.map((items)=>{
    return (
        <div className='image'>
        <img  src={items.url} alt="images"/>
       
        <h3 style={{marginLeft:"40px"}}>{items.title} 
        </h3>
        <p>{items.title2}</p>
       
        <h5 style={{marginLeft:"40px"}} >{items.description}</h5>
        <div className='img2'>
       <button style={{backgroundColor:"red"}}>GET FREE COUPON</button>
        <img  style={{width:"80%",height:"80px"}}src={items.rating}/>
        
        <h5>{items.dis}</h5>
        <h3 style={{color:'red'}}>{items.rate}</h3>
        <h5>{items.dis2}</h5>
        <h3 style={{color:'red'}}>{items.rate2}</h3>

        </div>
    </div>
    )
   })}
  
    </div>
    </>
)
}

export default Meals