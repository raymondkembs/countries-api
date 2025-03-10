import '../index.css';
import { useState } from 'react';
  import Button from 'react-bootstrap/Button';
  import Modal from 'react-bootstrap/Modal';
  

 function Popup({ isOpen, itemContent, onClose, mode }) {
  const [isDarkMode, setIsDarkMode] = useState(mode);

  if (!isOpen) return null;

  return (
    <>
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
                    <td><span className="tdText">Native Name:</span> {itemContent.native ? Object.values(itemContent.native).map(e => e.official) : 'no native name available'}</td>
                    <td><span className="tdText">Top Level Domain:</span> <i>{itemContent.tld}</i></td>
                  </tr>
                  <tr>
                    <td><span className="tdText">Population:</span> {itemContent.population}</td>
                    <td><span className="tdText">Currencies:</span> {itemContent.currencies ? Object.values(itemContent.currencies).map(e => `${e.name} (${e.symbol})`).join(', ') : 'no currencies available'}</td>
                  </tr>
                  <tr>
                    <td><span className="tdText">Region:</span> {itemContent.region}</td>
                    <td><span className="tdText">Languages:</span> {itemContent.languages ? Object.values(itemContent.languages).join(', ') : 'no languages available'}</td>
                  </tr>
                  <tr>
                    <td><span className="tdText">Sub Region:</span> <i>{itemContent.subregion}</i></td>
                    <td><span className="tdText">Borders:</span> <span className='tdTextSpecial' 
                    style={{
                      color: isDarkMode? "#202c37":"#ffffff",
                      background: isDarkMode?  "#ffffff" : "#202c37" 
                    }}
                    >{itemContent.borders ? Object.values(itemContent.borders).join(', ') : 'no borders'}</span></td>
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
