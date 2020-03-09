import React, { useState } from 'react';
import Docs from '../Docs/Docs.js';
import './creditCard.scss';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const creditCardCommands = ['npm install --save react-credit-cards']
const creaditCardLinks = [ {link: 'https://github.com/amarofashion/react-credit-cards', text:'for credit card'} ]

const CreditCard = () => {

    const [ cardInfo, setCardInfo ] = useState({ name:'', number:'', expiry:'', cvc:'' });

    const [ focused, setFocused ] = useState('')

    const handleInputChange = (event) => setCardInfo({ ...cardInfo, [event.target.name]: event.target.value })
    const handleFocus = (event) => setFocused(event.target.name)

    return ( 
        <div className="creditCard container">
            <div className="myCard">
                <Cards 
                    name={cardInfo.name} 
                    number={cardInfo.number}
                    expiry={cardInfo.expiry} 
                    cvc={cardInfo.cvc} 
                    focused={focused}
                    className="myCard"
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

            <Docs links={creaditCardLinks} commands={creditCardCommands}/>
        </div>
     );
}
 
export default CreditCard;