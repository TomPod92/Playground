import React from 'react';
import './piechart.scss';

const PieChart = () => {
    return ( 
        <div className="piechart centered">
            <div className="piechart__card">

                <div className="piechart__percent">
                    <svg>
                        <circle cx="75" cy="75" r="55" ></circle>
                        <circle cx="75" cy="75" r="55" style={{strokeDashoffset: `calc(345px - (345px * ${25}) / 100)`}}></circle>
                    </svg>

                    <div className="piechart__number">
                        <h3>25%</h3>
                    </div>
                </div>

                <h2 className="piechart__title">HTML</h2>

            </div>
        </div>
     );
}
 
export default PieChart;