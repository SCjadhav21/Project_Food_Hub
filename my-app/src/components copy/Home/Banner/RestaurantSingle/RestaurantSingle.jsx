import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./RestaurantSingle.css"

const RestaurantSingle = () => {
  const location=useLocation()
  console.log("data from user",location.state.img)


  const [data,setData]=useState([]);
  useEffect(() =>{
    const getData=async () =>{
      let res=await axios.get(" http://localhost:8080/restaruntsingle")
    console.log(res)
    setData(res.data)
    
    }
    getData()
   })

  return (
    <>
    <div className='main'>
    <div>
      <img style={{  height:"250px"}} src="https://www.kindmeal.my/photos/shop/5/583-c.jpg" />
    </div>
    <div>
    <img  style={{width:"60%",height:"350px"}}src={location.state.img} />
    

    </div>
    <div className='restro'>
      {
        data.map((items,title,title2) => {
          return (
            <div> 
              <div className='mains'>

              <img src={items.url} alt="single" />
              </div>
              <h4>{items.title}</h4>
              <p>{items.title2}</p>

            </div>
          )
        })
      }
      <div style={{backgroundColor:"red"}}>

      <Link to="/">Go Back</Link>
      </div>
      </div>
      </div>
    </>
    
  )
}

export default RestaurantSingle