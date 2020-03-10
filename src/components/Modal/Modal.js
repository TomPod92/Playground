import React, { useState } from 'react';
import Modal from 'react-modal';
import Docs from '../Docs/Docs.js';
import './modal.scss';

const modalCommands = ['npm install react-modal'];
const modalLinks = [{link: 'http://reactcommunity.org/react-modal/', text: 'for modal'}];
const modalTutorials = ['https://www.youtube.com/watch?v=10FNqoPpNbE&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=4'];

Modal.setAppElement('#root'); // bez tego wyskakuje blad

const MyModal = () => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const handleOpenModal = () => setModalIsOpen(true);

    const handleCloseModal = () => setModalIsOpen(false);

    return ( 
    <div className="container">

        <button className="openButton button" onClick={handleOpenModal}>Open</button>

        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={handleCloseModal} 
            shouldCloseOnOverLayClick={true}
            // jezeli chcemy defaultowe ustawienia, nie podajemy 3 ponizszych prop'pw oraz styli w css'ie
            className="modal"
            overlayClassName="modal__overlay"
            closeTimeoutMS={500}
        >
            <h2 className="modal__header">React Modal</h2>
            <p className="modal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque maxime blanditiis error, quasi deserunt fugit a hic repudiandae impedit fugiat dolores ratione, earum modi deleniti, aperiam veritatis odio reiciendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque maxime blanditiis error, quasi deserunt fugit a hic repudiandae impedit fugiat dolores ratione, earum modi deleniti, aperiam veritatis odio reiciendisLorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque maxime blanditiis error, quasi deserunt fugit a hic repudiandae impedit fugiat dolores ratione, earum modi deleniti, aperiam veritatis odio reiciendis</p>
            <button className="modal__closeButton button" onClick={handleCloseModal}>Close</button>
        </Modal>

        <Docs links={modalLinks} commands={modalCommands} tutorials={modalTutorials} />

    </div> 
    );
}
 
export default MyModal;