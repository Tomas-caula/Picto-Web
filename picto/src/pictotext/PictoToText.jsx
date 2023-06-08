import React, { useState, useEffect, useRef } from 'react';
import PictoGrid from '../components/PictoGrid';
import OutputGrid from '../components/OutputGrid';
import categories from '../categories';
import './PictoToText.css';

function PictoToText() {
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPictos, setSelectedPictos] = useState([]);

  const [element, setElement] = useState(document.getElementById("element"))

  const element1Ref = useRef(null);
  const [showOptions, setshowOptions] = useState(false)

  const [positionMenu, setPosition] = useState([])

  const handleCategoryClick = (subcategory) => {
    setSelectedCategory(subcategory);
  };

  const handlePictogramClick = (subcategory) => {
    if (subcategory.subcategories.length === 0) {
      setSelectedPictos((prevSelectedPictos) => [...prevSelectedPictos, subcategory.name]);
      setSelectedCategory(null);
    } else {
      setSelectedCategory(subcategory);
    }
  };


  useEffect (() => {
    console.log()
  })

  const handleGoBack = () => {
    setSelectedCategory(null);
  };


  const handleShow =  ( )  => {
    let { top, left, right, bottom } = element1Ref.current.getBoundingClientRect();
    setPosition([top + 10, left])
    setshowOptions(!showOptions)
  } 

  return (
    <div className="PictoToText">
      <div className='Translator'>
        <div className='Row1'>
          <div className="content">
            <button onClick={() => handleShow()}  ref={element1Ref} className='pictogramas' style={{backgroundColor:"white", border:0}}>
              <h3>Pictogramas</h3>
            </button>
           
            <button style={{backgroundColor:"white", border:0, flexDirection:"row"}}>
              <img src="./icons/español.png" className="image"/>
              <h3 style={{textAlign:"center"}}>Español</h3>
            </button>
       
            </div>
        </div>
        <div className='GridContainer'>
          <div className="PictoToText__pictoGrid">
            <PictoGrid categories={categories} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} handlePictogramClick={handlePictogramClick} handleGoBack={handleGoBack} />
          </div>
          <div className="PictoToText__outputGrid">
            <OutputGrid selectedPictos={selectedPictos} />
          </div>
        </div>
        <div className='Row3'>
          {/* Additional content */}
        </div>
      </div>

      {showOptions ? ( 
          <ul style={{position: "absolute", left: positionMenu[1], top: positionMenu[0]}}>
            <li> <img src='icons/español.png'></img> Español</li>
            <li> <img src='icons/español.png'/> Ingles</li>
            <li> <img src='icons/español.png'/> Pictogramas</li>
          </ul>
      ):null
      }


      
    </div>
  );
}

export default PictoToText;
