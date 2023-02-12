import React from "react";
import CountUp from "react-countup";

const counter = () => {
  return (
    <div className="counter_main">
      <CountUp start={0} end={5} delay={0}>
        {({ countUpRef}) => (
          <div className="counter_2">
            <span class="counter" ref={countUpRef}/>
            <p>Year Of Experience</p>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={17} delay={0}>
        {({ countUpRef }) => (
          <div className="counter_2">
            <span class="counter" ref={countUpRef}/>
            <p>Global Brands</p>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={320} delay={0}>
        {({ countUpRef }) => (
          <div className="counter_2">
            <span class="counter" ref={countUpRef}/>
            <p>Total Cases</p>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={1177} delay={0}>
        {({ countUpRef }) => (
          <div className="counter_2">
            <span class="counter" ref={countUpRef}/>
            <p>Happy clients</p>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default counter;
