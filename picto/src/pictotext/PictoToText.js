import React, { useState, useEffect } from 'react';
import PictoGrid from '../components/PictoGrid';
import OutputGrid from '../components/OutputGrid';
import categories from '../categories';
import './PictoToText.css';

function PictoToText() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPictos, setSelectedPictos] = useState([]);

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

  const handleGoBack = () => {
    setSelectedCategory(null);
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="PictoToText">
      <div className='Translator'>
        <div className='Row1'>
          <button style={{backgroundColor:"white", border:0}}>
            <text>Pictogramas</text>
          </button>
          <button style={{backgroundColor:"white", border:0, flexDirection:"row"}}>
            <img src="./icons/español.png" className="image"/>
            <text style={{textAlign:"center"}}>Español</text>
          </button>
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
    </div>
  );
}

export default PictoToText;
