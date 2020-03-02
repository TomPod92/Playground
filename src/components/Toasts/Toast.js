import React from 'react';
import CustomToast from './CustomToast.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss';

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

            <a href="https://www.npmjs.com/package/react-toastify" target="_blank" className="toast__link">See docs</a>

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
        </div>
     );
}
 
export default Toast;