import React from 'react';
import Drawer from './Drawer.js'

const DrawerContainer = () => {
    const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque omnis iusto perspiciatis, rem facere sint molestias eius magni quaerat mollitia hic veritatis laudantium. Neque est perspiciatis doloremque enim tempore!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque omnis iusto perspiciatis, rem facere sint molestias eius magni quaerat mollitia hic veritatis laudantium. Neque est perspiciatis doloremque enim tempore!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque omnis iusto perspiciatis, rem facere sint molestias eius magni quaerat mollitia hic veritatis laudantium. Neque est perspiciatis doloremque enim tempore!'

    return ( 
        <div className="centered">
            <Drawer text={text}/>
            <Drawer />
            <Drawer />
            <Drawer />
        </div>
     );
}
 
export default DrawerContainer;