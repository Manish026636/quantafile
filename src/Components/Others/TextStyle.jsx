import React from 'react'
import PropTypes from 'prop-types';

const TextStyle = ({ children }) => {
    return <div className='text-2xl lg:text-6xl font-extrabold sectionhead '>{children}</div>;
  };
  
  TextStyle.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default TextStyle;