import React, { useState } from 'react';
import Docs from '../Docs/Docs.js';
import './creditCard.scss';

import Cards from 'react-credit-cards';
// import 'react-credit-cards/es/styles-compiled.css';
import './rccsCard.scss'; // nie znalazlem innego sposobu na zmienienie styli. Powinno importowac sie to co powyżej

const creditCardCommands = ['npm install --save react-credit-cards'];
const creditCardLinks = [ {link: 'https://github.com/amarofashion/react-credit-cards', text:'for credit card'} ];
const creditCardTutorials = ['https://www.youtube.com/watch?v=HpmL7dvyRUY&t=420s'];

const CreditCard = () => {

    const [ cardInfo, setCardInfo ] = useState({ name:'', number:'', expiry:'', cvc:'' });

    const [ focused, setFocused ] = useState('')

    const handleInputChange = (event) => setCardInfo({ ...cardInfo, [event.target.name]: event.target.value })
    const handleFocus = (event) => setFocused(event.target.name)

    return ( 
        <div className="creditCard centered">
            <div className="myCard">
                <Cards 
                    name={cardInfo.name} 
                    number={cardInfo.number}
                    expiry={cardInfo.expiry} 
                    cvc={cardInfo.cvc} 
                    focused={focused}
                    issuer={"visa"}
                />
            </div>
            
            <form className="creditCard-form">
                <label htmlFor="name">Imię:</label>
                <input type="text" name="name" id="name" value={cardInfo.name} onChange={handleInputChange} onFocus={handleFocus}/>

                <label htmlFor="number">Numer:</label>
                <input type="tel" name="number" id="number" value={cardInfo.number} onChange={handleInputChange} onFocus={handleFocus}/>

                <label htmlFor="expiry">Data wygaśnięcia</label>
                <input type="text" placeholder="MM/YY" name="expiry" id="expiry" value={cardInfo.expiry} onChange={handleInputChange} onFocus={handleFocus}/>

                <label htmlFor="cvc">CVC:</label>
                <input type="tel" name="cvc" id="cvc" value={cardInfo.cvc} onChange={handleInputChange} onFocus={handleFocus}/>
            </form>

            <Docs links={creditCardLinks} commands={creditCardCommands} tutorials={creditCardTutorials}/>
        </div>
     );
}
 
export default CreditCard;