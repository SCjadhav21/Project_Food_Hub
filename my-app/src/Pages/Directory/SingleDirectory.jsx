import React from 'react'
import './Directory.css'
import axios from 'axios'

export default function SingleDirectory() {
  const [obj, setObj] = React.useState({})
  React.useEffect(() => {
    axios.get(`https://prakash-vercel-database.vercel.app/kindmealDirectory/${1}`)
      .then((res) => setObj(res.data))
  }, [])

  return (
    <div>
      <div className='directorybannersection' >
        <div>
          <img height='320px' width='100%' src={obj.banner} alt="" />
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
