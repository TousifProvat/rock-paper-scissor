import React from 'react';

// svgs
import rules from '../assets/image-rules-bonus.svg';
import close from '../assets/icon-close.svg';

export default function Rules({ onClick }) {
  return (
    <div className="rules-modal">
      <div className="modal-header">
        <h2 className="modal-title">RULES</h2>
        <img className="close" onClick={onClick} src={close} alt="close" />
      </div>
      <img className="rule" src={rules} alt="game rules" />
    </div>
  );
}
