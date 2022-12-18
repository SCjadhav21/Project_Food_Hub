


import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import "./moments.css"
import { NavLink } from 'react-router-dom'

const Moments = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            let res = await axios.get("https://reduxapi.onrender.com/moments")
            console.log(res);
            setData(res.data)

        }
        getData()
    }, [])
    return (
        <>
            <div className='moment'>
                <div className='live'>

                    <h1 style={{fontSize:"30px"}}>Yummyliciou Moments</h1>
                    <h2 id='hot'>
                        <a href='' >Photo Moments</a>
                        <a href="">Secret Recipes</a>
                        <a href="">Member Hot Picks</a>

                    </h2>
                </div>
                <div className='mom'>


                    {data.map((items, title, add) => {
                        return (
                            <div>

                                <div className='imgs'>

                                    <NavLink state={{ img: items.url, title: items.title, add: items.add }} to="/rest" >

                                        <img src={items.url} alt="" />
                                    </NavLink>
                               
                                <h5>{items.title}</h5>
                                <p>{items.add}</p>
                                
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Moments