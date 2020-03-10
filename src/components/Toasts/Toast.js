import React from 'react';
import CustomToast from './CustomToast.js';
import Docs from '../Docs/Docs.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss';

const toastsCommands = ['npm install --save react-toastify'];
const toastsLinks = [{link:"https://www.npmjs.com/package/react-toastify", text: 'for toasts'}];
const toastsTutorials = ['https://www.youtube.com/watch?v=nX_xDBR_gqo&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=3'];

const Toast = () => {

    const notify = () => {
        toast('Default!');

        toast.success('Success');

        toast.error('Error');

        toast.error(<CustomToast />);

        toast.info('Info', {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "my_custom_toast"
        });
    }

    return ( 
        <div className="container">
            <button className="toast__button button" onClick={notify}>Open</button>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            ></ToastContainer>

            <Docs links={toastsLinks} commands={toastsCommands} tutorials={toastsTutorials}/>
        </div>
     );
}
 
export default Toast;