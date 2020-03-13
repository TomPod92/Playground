import React from 'react';

const steps = [
  {
    target: "body",
    placement: "center",
    content: "Target === body",
    locale: { skip: "S-K-I-P" },
  },
  {
    target: ".section--one",
    placement: "top",
    title: "Our projects",
    content: "Target === section--one",
  },
  {
    target: ".section--two h2",
    placement: "top",
    title: "Our Mission",
    content: "Target === section--two h2",
  
  },
  {
    target: ".section--three h2",
    placement: "left",
    title: "Progress",
    content: "Target === section--three h2",
  
  },
  {
    target: ".section--four .sectionFeature",
    placement: "top",
    title: "Our Fail Test",
    content: (
      <div>
        Target === section--four .sectionFeature
        <br />
        <h3>Like a H3 title</h3>
      </div>
    ),
  }
];

export default steps;