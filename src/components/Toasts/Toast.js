import React from 'react';
import CustomToast from './CustomToast.js';
import Docs from '../Docs/Docs.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss';

const toastsCommands = ['npm install --save react-toastify'];

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
            <button className="toast__button" onClick={notify}>Open</button>

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

            <Docs link="https://www.npmjs.com/package/react-toastify" commands={toastsCommands} />
        </div>
     );
}
 
export default Toast;