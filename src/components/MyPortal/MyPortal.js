import React, { useState } from 'react';
import { MyModal } from './MyModal'

export const MyPortal = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="centered">
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <MyModal closeModal={() => setOpen(false)} open={open}>Text to be shown as "children"</MyModal>
    </div>
  )
};

// Do pliku index.html dodac diva z jakims ID