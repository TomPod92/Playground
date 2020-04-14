import React from 'react';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';

import './myoverdrive.scss';
import page_B_background from './page_B_background.jpg';

const Page_B = () => {
    return (
        <div className="overdrivePage">
            <Overdrive id="overdrive_image_B" duration={1000}>
                <img className="overdrivePage__image" src={page_B_background} alt=""/>
            </Overdrive>
            <p className="overdrivePage__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore possimus eaque officiis sequi libero neque, corrupti, voluptas cupiditate, odio iusto! Explicabo, molestias eveniet. A itaque harum ad quam eos.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ipsum rem vero magnam, sint iure autem, quos nihil adipisci quidem ab. Cum suscipit tempora est ratione cupiditate, deleniti consequuntur maxime.</p>
            <Link className="overdrivePage__link" to="/overdrive">Back</Link>
        </div>
    );
}
 
export default Page_B;