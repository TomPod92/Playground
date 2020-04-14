import React from 'react';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';

import Docs from '../Docs/Docs.js';
import './myoverdrive.scss';
import page_A_background from './page_A_background.jpg';
import page_B_background from './page_B_background.jpg';

const Links = [ {link: 'https://github.com/berzniz/react-overdrive', text:'for react-overdrive'} ];
const Commands = ['npm install react-overdrive --save'];

const MyOverdrive = () => {
    return (
        <div className="myOverdrive centered">
            <div className="overdrive__navigation">
                <div className="overdrive__navItem">
                    <Overdrive id="overdrive_image_A">
                        <img className="overdrive__image" id="overdrive_image_A" src={page_A_background} alt=""/>
                    </Overdrive>
                    <Link className="overdrive__link" to="/overdrive/page_A">Page A</Link>
                </div>

                <div className="overdrive__navItem">
                    <Overdrive id="overdrive_image_B" duration={3000}>
                        <img className="overdrive__image" id="overdrive_image_B" src={page_B_background} alt=""/>
                    </Overdrive>
                    <Link className="overdrive__link" to="/overdrive/page_B">Page B</Link>
                </div>
            </div>
            
            <Docs links={Links} commands={Commands}/>
        </div>
    );
}
 
export default MyOverdrive;

// jeżeli dodamy "duration" do jakiegoś elementu określamy tym czas jaki będzie trawła animacja DO tego elementu