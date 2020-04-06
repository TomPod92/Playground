import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import PageOne from './PageOne.js';
import PageTwo from './PageTwo.js';
import PageThree from './PageThree.js';
import './pageTransition.scss';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Owijamy <Switch> za pomoca <CSSTransition>
// Owijamy <CSSTransition> w <TransitionGroup>
// Owijamy <TransitionGroup> w <Route> w którym renderujemy wszystko i desktrukturyzujemy "location"

const PageTransition = (props) => {
    return (
        <div className="">
            <nav className="pageTransition__navigation">
                <Link className="link" to="/pageTransition/pageOne">Page One</Link>
                <Link className="link" to="/pageTransition/pageTwo">Page Two</Link>
                <Link className="link" to="/pageTransition/pageThree">Page Three</Link>
            </nav>

            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={450} classNames="fade">
                        <Switch location={location}>
                            <Route path="/pageTransition/pageOne" component={PageOne} exact/>
                            <Route path="/pageTransition/pageTwo" component={PageTwo} exact/>
                            <Route path="/pageTransition/pageThree" component={PageThree} exact/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </div>
    );
}
 
export default PageTransition;