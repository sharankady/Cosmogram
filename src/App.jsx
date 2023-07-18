import React, { useEffect, useState } from 'react'
import CardItems from './CardItems'
import Enter from './Enter'
import Navbar from './Navbar'


const KEY = 'Ebrup2ecMYByxio56sawPZB7YIhfMllIuvPrSmGV'
// const COUNT = '1'

export default function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState("1");
  
  useEffect(function(){
    async function fetchImages() {
      if(query.trim() ==='') return
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${KEY}&count=${query}`)
      
      if (!res.ok)
            throw new Error("Something went wrong with fetching images");
       
      const data = await res.json()
      console.log(data)
      setData(data)
    }
    fetchImages()

  },[query])
  return (
    <div>
      <Navbar query={query} setQuery={setQuery} />
    {query<=0 || query>10 && query!== Number  ? <Enter/>
    :(data.map(post =>(
      <CardItems
      image={post.hdurl}
      title={post.title}
      date={post.date}
      explanation ={post.explanation}
      copyright={post.copyright}
      /> 
    ))  )       
    }     
    </div>
  )
}
