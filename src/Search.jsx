import './Search.css'
export default function Search({query,setQuery}) {  
  const handleSubmit = (event) => {
        event.preventDefault();
        setQuery('')
      }
  return (
    <form onSubmit={handleSubmit} >
   
   <label htmlFor="numb"><b>Enter a Number:</b></label>   
  <input
      className="search"
      id="numb"    
      type="number"
      placeholder="NO."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    </form>
        
  );
}