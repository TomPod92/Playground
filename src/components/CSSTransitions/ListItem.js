import React from 'react';

const ListItem = (props) => {
    return (
            <div className="listItem">
                {props.item.name}
                <button className="listItem__button" onClick={() => props.handleDeleteListItem(props.item.id)}>Delete</button>
            </div>
    )
};

export default ListItem;