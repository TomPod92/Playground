import React, { useState } from "react";
import ReactJoyride from "react-joyride";
import './joyrideMap.scss';
import Docs from '../Docs/Docs.js';

const Links = [ {link: 'https://docs.react-joyride.com/', text:' for Joyride'} ];
const Commands = ['npm i react-joyride'];
const Tutorials = ['https://medium.com/@sooyshim/the-basics-of-react-joyride-1a9e16213ee6', 'https://codesandbox.io/s/2zpjporp4p'];


const steps = [
  {
    content: "Add new step",
    placement: "center",
    locale: { skip: "S-K-I-P" },
    target: "body"
  },
  {
    content: "These are our super awesome projects!",
    placement: "bottom-start",
    target: ".demo__projects h2",
    title: "Our projects"
  },
  {
    title: "Our Mission",
    content: "Third step",
    
    target: ".demo__how-it-works h2",
    placement: "top"
  },
  {
    title: "Our Fail Test",
    content: (
      <div>
        You can render anything here.
        <br />
        <h3>Like a H3 title</h3>
      </div>
    ),
    target: ".demo__rumba .sectionFeature",
    placement: "top"
  }
]

class JoyrideMap extends React.Component {
state = {
      run: false,
      // steps: [
      //   {
      //     content: "Add new step",
      //     placement: "center",
      //     locale: { skip: "S-K-I-P" },
      //     target: "body"
      //   },
      //   {
      //     content: "These are our super awesome projects!",
      //     placement: "bottom-start",
      //     target: ".demo__projects h2",
      //     title: "Our projects"
      //   },
      //   {
      //     title: "Our Mission",
      //     content: "Third step",
          
      //     target: ".demo__how-it-works h2",
      //     placement: "top"
      //   },
      //   {
      //     title: "Our Fail Test",
      //     content: (
      //       <div>
      //         You can render anything here.
      //         <br />
      //         <h3>Like a H3 title</h3>
      //       </div>
      //     ),
      //     target: ".demo__rumba .sectionFeature",
      //     placement: "top"
      //   }
      // ]
    };
  

  handleClickStart = e => {
    e.preventDefault();

    this.setState({
      run: true
    });
  };

  handleJoyrideCallback = data => {
    if(data.status === 'ready') {
      this.setState({
        run: false
      });
    }
  };

  render() {

    return (
      <div className="joyrideMap container">
        <ReactJoyride
          continuous
          scrollToFirstStep
          showProgress
          showSkipButton
          run={this.state.run}
          // steps={this.state.steps}
          steps={steps}
          callback={this.handleJoyrideCallback}
        />

        <div className="section">
            <h1 className="joyrideMap__header">Create walkthroughs and guided tours for your ReactJS apps.</h1>
            <button className="joyrideMap__button" onClick={this.handleClickStart}>Let's Go!</button>
        </div>

        <div className="section section--one demo__projects">
          <h2 className="section__header">OUR PROJECTS</h2>
        </div>

        <div className="section section--two demo__how-it-works">
          <h2 className="section__header">HOW DOES IT WORK</h2>
        </div>

        <div className="section section--three demo__about">
          <h2 className="section__header">ALL ABOUT IT</h2>
        </div>

        <div className="section section--four  demo__rumba">
          <h2 className="section__header">Rumba</h2>

          
          <Docs links={Links} commands={Commands}  tutorials={Tutorials}/>

          <div className="sectionFeature"></div>
        </div>

      </div>
    );
  }
}

export default JoyrideMap;

// import React, { useState } from 'react';
// import Docs from '../Docs/Docs.js';
// import Joyride from 'react-joyride';
// import './joyrideMap.scss';

// const Links = [ {link: 'https://docs.react-joyride.com/', text:' for Joyride'} ];
// const Commands = ['npm i react-joyride'];
// const Tutorials = ['https://medium.com/@sooyshim/the-basics-of-react-joyride-1a9e16213ee6'];

// const steps = [
//   { target: '.step1', placement: "center", content: 'Info 1', },
//   { target: '.step2', placement: "center", content: 'Info 2', },
//   { target: '.step3', placement: "center", content: 'Info 3', },
//   { target: '.step4', placement: "center", content: 'Info 4', },
// ];

// const JoyrideMap = () => {

//   const [steps, setSteps] = useState([
//     { target: '.step1', placement: "center", content: 'Info 1', },
//     { target: '.step2', placement: "center", content: 'Info 2', },
//     { target: '.step3', placement: "center", content: 'Info 3', },
//     { target: '.step4', placement: "center", content: 'Info 4', },
//   ]);
  
//   const [ runTour, setRunTour ] = useState(false);

//   const startTour = () => {
//     setRunTour(true);
//   }

//   const handleJoyrideCallback = (data) => {
//     if(data.status === 'ready') {
//       setRunTour(false);
//     }
//   }

//   return ( 
//     <div className="joyrideMap container">
//       <Joyride 
//         steps={steps}
//         run={runTour}
//         continuous={true}
//         showProgress={true}
//         showSkipButton={true}
//         disableCloseOnEsc={false}
//         callback={handleJoyrideCallback}
//         scrollToFirstStep={true}
//       />

//       <h2 className="joyrideMap__header">Welcome to Joyride</h2>
//       <button className="joyrideMap__button" onClick={startTour}>Show tour</button>

//       <div className="step1 section section--one">Step 1</div>
//       <div className="step2 section section--two">Step 2</div>
//       <div className="step3 section section--three">Step 3</div>
//       <div className="step4 section section--four">Step 4</div>
//       <Docs links={Links} commands={Commands}  tutorials={Tutorials}/>
//     </div>
//    );
// }
 
// export default JoyrideMap;