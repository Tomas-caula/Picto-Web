import React from 'react';
import PropTypes from 'prop-types';

import './OutputGrid.css';

const OutputGrid = ({ texts }) => {
  return (
    <div className="OutputGrid">
      <div className="OutputGrid__container">
        <text>{texts}</text>
      </div>
    </div>
  );
};

OutputGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OutputGrid;
