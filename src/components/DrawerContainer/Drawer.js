import React from 'react';
import './drawer.scss';

const Drawer = (props) => {
    const paragraphRef = React.createRef();
    const paragraphContainerRef = React.createRef();

    const slideDrawer = () => {
        const paragraphHeight = paragraphRef.current.offsetHeight;

        if ( paragraphContainerRef.current.offsetHeight === 0 ) paragraphContainerRef.current.style.height = paragraphHeight + 'px';
        else paragraphContainerRef.current.style.height = 0;
    }

    return (
        <div className="drawer">
            <button className="drawer__button button" onClick={ slideDrawer }>Open</button>
            <div className="drawer__paragraph" ref={paragraphContainerRef}>
                <p ref={paragraphRef}>{ props.text ? props.text : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque facilis sunt repellat unde? Hic quod soluta, maiores ut, nisi fugit inventore ea, illum aliquid eaque iste consectetur! Laudantium, repudiandae.loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quisquam culpa placeat ullam doloribus mollitia, error necessitatibus natus ratione quibusdam perferendis modi totam ex voluptatibus similique quis non rem illo?'}</p>
            </div>
        </div>
    )
};

export default Drawer;