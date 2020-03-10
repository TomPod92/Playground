import React from 'react';
import Docs from '../Docs/Docs.js';
import FormInfo from './FormInfo.js';
import './reactFormik.scss';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const formikCommands = ['npm install formik --save', 'npm install -S yup'];

const formikLinks = [
    { link: 'https://jaredpalmer.com/formik/docs/overview', text: 'for Formik' },
    { link: 'https://www.npmjs.com/package/yup', text: 'for Yup' },
];

const formikTutorials = ['https://www.youtube.com/watch?v=TxEVnaISj1w&list=PL8fumNHsC-3O0iQ_KP2Gz5f8ib2jP5rPv&index=23', 'https://www.youtube.com/watch?v=FD50LPJ6bjE', 'https://www.youtube.com/watch?v=yNiJkjEwmpw&t=1s'];

const ReactFormik = () => {

    const formik = useFormik({
        initialValues: {name: '', surname: '', email: ''},
        validationSchema: Yup.object().shape({
            name: Yup.string().min(4, "Musi mieć przynajmniej 4 litery").max(15, "Może mieć maksymalnie 15 liter").required("Imię jest wymagane"),
            surname: Yup.string().min(4, "Musi mieć przynajmniej 6 litery").max(15, "Może mieć maksymalnie 18 liter"),
            email: Yup.string().min(8, "Musi mieć przynajmniej 8 liter").max(45, "Może mieć maksymalnie 45 liter").email("Zły format email").required("Email jest wymagany"),
        }),
        onSubmit: ( values, {setSubmitting, resetForm} ) => {
            // wylaczy mozliwosc wyslania formularza ponownie
            setSubmitting(true);

            // fejkowe wyslanie zapytania do API
            setTimeout( () => {
                console.log(values);
            }, 500);

            // wyczyscimy input'y w formularzu
            resetForm();

            // po wyslaniu zapytania do API ponownie umozliwimi wyslanie formularza
            setSubmitting(false);
        }
    })

    // "{...formik.getFieldProps(...)}" zwraca -->onChange, onBlur, value, checked<-- wiec nie trzeba ich podawac osobno }
    return ( 
        <div className="reactFormik container">

                <form className="form" onSubmit={formik.handleSubmit}>
                    <div className="input-row">
                        <label htmlFor="name">Imię:</label>
                        <input type="text" name="name" id="name"  {...formik.getFieldProps('name')} className={formik.touched.name && formik.errors.name ? "has-error" : null} />
                        <FormInfo touched={formik.touched.name} message={formik.errors.name}/>
                    </div>

                    <div className="input-row">
                        <label htmlFor="surname">Nazwisko:</label>
                        <input type="text" name="surname" id="surname" {...formik.getFieldProps('surname')} className={formik.touched.surname && formik.errors.surname ? "has-error" : null} />
                        <FormInfo touched={formik.touched.surname} message={formik.errors.surname}/>
                    </div>

                    <div className="input-row">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" {...formik.getFieldProps('email')} className={formik.touched.email && formik.errors.email ? "has-error" : null} />
                        <FormInfo touched={formik.touched.email} message={formik.errors.email}/>
                    </div>

                    <button className="button form__button" type="submit" disabled={formik.isSubmitting}>Wyślij</button>
                </form>

            <Docs links={formikLinks} commands={formikCommands} tutorials={formikTutorials}/>
        </div>
     );
}
 
export default ReactFormik;