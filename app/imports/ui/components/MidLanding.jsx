import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class MidLanding extends React.Component {
  render() {
    const divStyle = { paddingBottom: '50px' };
    return (
        <div style = {divStyle} className = 'simtiki'>
          <Grid centered>
            <Grid.Row>
              <Image src="/images/logo.png" />
            </Grid.Row>
            <Grid.Row>
              <Header as = 'h1' textAlign = 'center'>Contact tracing for a healthier Hawaii</Header>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default MidLanding;
