import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './modal.scss';

export const MyModal = (props) => {
  if(!props.open) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      <div className="myModalOverlay" onClick={props.closeModal}></div>
      <div className="myModal">
        {props.children}
        <button onClick={props.closeModal}>Close modal</button>
      </div>
    </>,
    document.getElementById('modalPortal')
  )
};

// Użyć metody createPortal, która jako drugi argument przyjmuje miejsce w którym dana rzecz ma być wyrenderowana