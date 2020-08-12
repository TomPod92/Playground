import React from 'react';

const Count = (props) => {
  console.log(`Rendering 'Count' - ${props.text}`);

  return (
    <div>
      {props.text} - {props.count}
    </div>
  )
};

export default React.memo(Count);