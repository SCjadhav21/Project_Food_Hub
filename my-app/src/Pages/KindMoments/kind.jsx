import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import './kind.css'
import { AiOutlineClockCircle, AiTwotoneMessage } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import RecipesAndDirectoryPagination from '../../Components/RecipesAndDirectoryPagination';



const getData = (url) => {
  return axios.get(url)
}

export default function Kind() {
  const [arr, setArr] = useState([])
  const [text, setText] = useState('')
  const [que, setQue] = useState(text)
  const [page, setpage] = useState(1)

  useEffect(() => {
    getData(`https://prakash-vercel-database.vercel.app/kindmealRecipes?_page=${page}&_limit=12&q=${que}`)
      .then((res) => setArr(res.data))
  }, [que, page])

  const handelsearchrecipes = () => {
    setQue(text)
  }

  return (
    <div className='recipepage' >
      <div className='recipesintro' >
        <p>KindMoments   <span style={{color:'#888888'}} >|   Saving Lives with Yummy Photos</span></p>
        <br/>
        <p style={{width:"800px",lineHeight:"15px"}}>Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. Share your interesting KindMoments, and build your own fans and followers to encourage kind, healthy meals</p>
        <p>Download our mobile app to easily showcase your masterpieces and interact with food lovers..</p>
        <p>Get started sharing your tasty moments now.</p>
      </div>
      
      <div className='searchbtnsRecipe' >
        <p>Moments</p>
        <p>Deal Review</p>
        <p>Following</p>
        
        <input type="text" placeholder='Search User or shop' onChange={(e) => setText(e.target.value)} />
        <select onChange={(e) => setText(e.target.value)} >
          <option value="">All Location</option>
          <option value="appetizers">Appetizers</option>
          <option value="beverages">Beverages</option>
          <option value="breakfast">Breakfast</option>
          <option value="breads">Breads</option>
          <option value="condiments">Condiments</option>
          <option value="desserts">Desserts</option>
          <option value="snacks">Snacks</option>
          <option value="main Dishes">Main Dishes</option>
          <option value="salads">Salads</option>
          <option value="Side Dishes">Side Dishes</option>
          <option value="Soups">Soups</option>
        </select>
        <button onClick={handelsearchrecipes}style={{backgroundColor:"red"}} >Search Recipes</button>
       
      
        
      </div>
      <RecipesAndDirectoryPagination total={4} current={page} onchange={(value) => setpage(value)} />
      <div className='recipecontainer' >
        {
          arr.map((ele) =>
            <div key={ele.id} className='recipecard' >
              <div>
                <div>
                  <img src={ele.logo} alt="" />
                  <p>{ele.channel}</p>
                </div>
                <div>
                  <button>View</button>
                </div>
              </div>
              <div >
                <img src={ele.img} alt="" />
                <p>{ele.name}</p>
              </div>
              <div>
                <div>
                  <p><AiOutlineClockCircle color='#cccccc' /> {ele.time}</p>
                </div>
                <div>
                  <p><BsFillHeartFill color='#cccccc' /> 0</p>
                  <p><AiTwotoneMessage color='#cccccc' /> 0</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <RecipesAndDirectoryPagination total={4} current={page} onchange={(value) => setpage(value)} />
    </div>
  )
}
