import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './home.scss';

const Home = () => <Link to="/" className="home"><FontAwesomeIcon icon={faHome}/></Link>
 
export default Home;