import React from 'react';

const PictoGrid = ({ categories, selectedCategory, handleCategoryClick, handlePictogramClick, handleGoBack }) => {
  return (
    <div>
      {!selectedCategory && (
        categories.map((category) => (
          <button key={category.name}  style={{width:"20%", backgroundColor:"white", border:0}} onClick={() => handleCategoryClick(category)}>
            <img src={category.pictogram} alt={category.name} style={{ maxWidth: '100%', height: 'auto' }} />
          </button>
        ))
      )}
      {selectedCategory && (
        selectedCategory.subcategories.map((subcategory) => (
            <button key={subcategory.name} style={{width:"20%", backgroundColor:"white", border:0}} onClick={() => handlePictogramClick(subcategory)}>
              <img src={subcategory.pictogram} alt={subcategory.name} style={{ maxWidth: '100%', height: 'auto' }} />
            </button>
        ))
      )}
    </div>
  );
};

export default PictoGrid;
