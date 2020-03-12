import React from 'react';

class Column extends React.Component {
    
    render() {
        console.log('Propsy komponentu COLUMN: ', this.props)
        return (
            <div className="column">
                <h2 className="column__title">{this.props.column.title}</h2>
                <div className="column__list">

                </div>
            </div>
        )
        
    }
}

export default Column;