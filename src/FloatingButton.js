import React from 'react';
import './FloatinButton.css';

function FloatingButton() {
    //-->   Le añadire pupop con una targeta de mis datos   <--
    
  return (
    <div className='floating-button'>
    <md-branded-fab label="Contactar">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
</div>
  );
}

export default FloatingButton;