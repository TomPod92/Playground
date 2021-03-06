import React, { forwardRef } from 'react'; //potrzebny jezeli chcemy opakowac react'owy komponent <Tippy> (ostatni przypadek)

import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import Docs from '../Docs/Docs.js';
import './tooltip.scss';

const tooltipCommands = ['npm i \'@tippy.js/react\''];
const tooltipLinks = [{link: 'https://github.com/atomiks/tippy.js-react', text:'for tooltips'}];
const tooltipTutorials = ['https://www.youtube.com/watch?v=8y4Dr9jJtF0&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=5'];

const Tooltip = () => {
    return ( 
    <div className="centered">
{/* -------------------------------------------------------------------------------- */}
        <h2 className="tooltip__header header">Basic tooltip</h2>

        <Tippy content="Tooltip nr.1">
            <button className="tooltip__button button">Show tooltip 1</button>
        </Tippy>
{/* -------------------------------------------------------------------------------- */}
        <h2 className="tooltip__header header">Tooltip z html tag'iem w środku</h2>

        <Tippy content={<span className="tooltip__span">Tooltip nr.2</span>}>
            <button className="tooltip__button button">Show tooltip 2</button>
        </Tippy>
{/* -------------------------------------------------------------------------------- */}
        <h2 className="tooltip__header header">Tooltip z react'owym komponentem w środku</h2>

        <Tippy content={<CustomTooltip />}>
            <button className="tooltip__button button">Show tooltip 3</button>
        </Tippy>
{/* -------------------------------------------------------------------------------- */}
        <h2 className="tooltip__header header">Tooltip z dodatkowymi propsami</h2>

        <Tippy content="Tooltip nr.4" arrow={true} delay={500} placement="left">
            <button className="tooltip__button button">Show tooltip 4</button>
        </Tippy>
{/* -------------------------------------------------------------------------------- */}
        <h2 className="tooltip__header header">Tooltip okalajacy react'owy komponent</h2>

        <Tippy content="Tooltip nr.5">
            <CustomChild />
        </Tippy>
{/* -------------------------------------------------------------------------------- */}
        <h2 className="tooltip__header header">Tooltip w CSS'ie</h2>
        <div className="custom" data-tooltip="Jakiś text"></div>

        <a href="https://www.youtube.com/watch?v=ujlpzTyJp-M" target="_blank" rel="noopener noreferrer" className="custom__tutorial">Tutorial</a>

        <Docs links={tooltipLinks} commands={tooltipCommands} tutorials={tooltipTutorials}/>
    </div>
    );
}

const CustomTooltip = () => <span className="tooltip__span">Tooltip nr.3</span>

const CustomChild = forwardRef((props, ref) => (
    <div ref={ref} className="tooltip__button button">
        <p>First line</p>
        <p>Second line</p>
    </div>
))
 
export default Tooltip;