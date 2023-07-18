import React from 'react'
import Search from './Search'


export default function Navbar({query,setQuery,date,setDate,data}) {
  return (
    <nav className="navbar bg-info">
    <div className="container-fluid">
    <a className="navbar-brand" href="#"><span>🛰️</span>Cosmogram</a>
    <Search data={data} query={query} setQuery={setQuery} date={date} setDate={setDate} />
     </div>
      </nav>

  )
}   
