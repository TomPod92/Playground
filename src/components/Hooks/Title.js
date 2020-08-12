import React from 'react';

const Title = () => {
  console.log("Redering 'Title' Component");

  return (
    <div>Use Callback hook</div>
  )
};

export default React.memo(Title);