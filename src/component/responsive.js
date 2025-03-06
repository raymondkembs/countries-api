import '../index.css';
import { useState } from 'react';
  import Button from 'react-bootstrap/Button';
  import Modal from 'react-bootstrap/Modal';
  

 function Popup({ isOpen, itemContent, onClose, mode }) {
  const [isDarkMode, setIsDarkMode] = useState(mode);

  if (!isOpen) return null;
  
  return (
    <>
    {console.log(itemContent)}
       <div className='popcon'
        style={{
          background: isDarkMode? "#2b3945" : "#fafafa"
        }}
       >
          <div className='objBack'>
            <div className='divButton'>
              <button 
                onClick={(e)=>{
                  e.stopPropagation();
                  onClose(false)}}
                  style={{
                    background: isDarkMode? "#202c37" : "#ffffff",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    color: isDarkMode? "#ffffff": "#202c37"
                  }}
              >Back</button>
            </div>
            <div className='objFlag'>
                <img src={itemContent.flags}></img>
            </div>
          </div>
          <div className='objContent'>
              <table 
              style={{
                color: isDarkMode? "#ffffff": "#202c37"
              }}>
                <thead>
                  <tr>
                    <td>{itemContent.name}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="tdText">Native Name:</span> {itemContent.native}</td>
                    <td><span className="tdText">Top Level Domain:</span> <i>{itemContent.root}</i></td>
                  </tr>
                  <tr>
                    <td><span className="tdText">Population:</span> {itemContent.population}</td>
                    <td><span className="tdText">Currencies:</span> ....</td>
                  </tr>
                  <tr>
                    <td><span className="tdText">Region:</span> {itemContent.region}</td>
                    <td><span className="tdText">Languages:</span> ....</td>
                  </tr>
                  <tr>
                    <td><span className="tdText">Sub Region:</span> <i>{itemContent.region}</i></td>
                  </tr>
                  <tr>
                    <td><span className="tdText">Capital:</span> {itemContent.capital}</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>
    </>
  )
  }

  export default Popup;