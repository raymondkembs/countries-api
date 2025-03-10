import './App.css';
import Card from "./component/Card";
import './index.css';
import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedContinent, setSelectedContent] = useState("");
  
    useEffect(()=>{
      const openUrl = "https://restcountries.com/v3.1/all";

      axios.get(openUrl)
        .then((response) => setData(response.data))
        .catch((error) => setError(error));

    },[]);

    if(error) return <div>Error:{error.message}.</div>
    if(!data) return <div>Loading...</div>
    
  const filteredCountries = data.filter((country) =>{
    const matchesSearchTerm = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesContinent = selectedContinent ? country.region === selectedContinent : true;

    return matchesSearchTerm && matchesContinent;
  });

  
  const continents = [...new Set(data.map((country) => country.region))];
  const toggleMode = () =>{
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className="body"
      style={{
        background: isDarkMode? "#202c37" : "#fafafa"
      }}
    >
      <header
      style={{
        background: isDarkMode? "#202c37" : "#ffffff",
        color: isDarkMode? "#ffffff": "#202c37",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
      >
        <h1 className="text-white"
        style={{
          background: isDarkMode? "#202c37" : "#ffffff",
          color: isDarkMode? "#ffffff": "#202c37"
        }}
        >
          Where in the world?
        </h1>
        <button 
          id='darkmode'
          className="mr-9 text-white rounded pt-2 pb-2 pl-5 pr-5"
          onClick={toggleMode}
          style={{
            background: isDarkMode? "#2b3945" : "#ffffff",
            color: isDarkMode? "#ffffff": "#202c37"
          }}
        >{isDarkMode? "Dark Mode" : "Light Mode"}</button>
      </header>
      <div className="inputSection"
        style={{
          background: isDarkMode? "#202c37" : "#fafafa"
        }}
      >
        <input 
            id="mycard"
            className="rounded pl-6"
            text="text"
            placeholder='Search for a country'
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            style={{
              background: isDarkMode? "#2b3945" : "#ffffff",
              color: isDarkMode? "#ffffff": "#202c37",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}
          />
        <select 
          id="mycard" 
          className="rounded mr-6"
          style={{
            background: isDarkMode? "#2b3945" : "#ffffff",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            color: isDarkMode? "#ffffff": "#202c37"
          }}
          value={selectedContinent}
          onChange={(evn)=>setSelectedContent(evn.target.value)}
        >
          <option value="">Filter by Region</option>
          {continents.map((continent, index)=>{
            return(
              <option key={index} value={continent}>
               {continent}
            </option>
            )
          })}
        </select>
      </div>
      <div className="App p-2 bg-green-400"
      style={{
        background: isDarkMode? "#202c37" : "#fafafa"
      }}
      >
        {filteredCountries.length === 0?(<p className="noSearch"
        style={{
          color: isDarkMode? "#ffffff": "#202c37"
        }}
        >No countries match your search.</p>):(
          filteredCountries.map((e)=>{
            return(
              <Card 
                  key={uuidv4()}
                  id={e.area}
                  name={e.name.common}
                  native = {e.name.nativeName}
                  population={e.population}
                  region={e.region} 
                  capital={e.capital}
                  flags = {e.flags.png}
                  currencies = {e.currencies}
                  tld ={e.tld}
                  mode = {isDarkMode}
                  languages = {e.languages}
                  subregion = {e.subregion}
                  borders = {e.borders}
                  cca3 = {e.cca3}
              />
            )
          })
        )
      }
     </div>
    </div>
  );
}

export default App;
