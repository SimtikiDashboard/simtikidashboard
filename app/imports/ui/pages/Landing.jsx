import React from 'react';
import MidLanding from '../components/MidLanding';
import BottomLanding from '../components/BottomLanding';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <MidLanding/>
          <BottomLanding/>
        </div>
    );
  }
}

export default Landing;
