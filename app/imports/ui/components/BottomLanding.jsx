import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class BottomLanding extends React.Component {
  render() {
    const divStyle = { paddingBottom: '30px' };
    return (
        <div style = {divStyle} className='landing-colorblock'>
          <Grid textAlign='center' container columns={3}>
            <Grid.Column>
              <Image centered src="/images/virus.svg" size='small'/>
              <Header as = 'h3'>Interactive graphs and infection trees, view insightful data.</Header>
            </Grid.Column>
            <Grid.Column>
              <Image centered src="/images/vaccine.svg" size='small'/>
              <Header as = 'h3'>Fully keep track of herd immunization.</Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Image centered src="/images/id.svg" size='small'/>
              <Header as = 'h3'>Patients, nurses, doctors, and hospital staff are all in the system.</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default BottomLanding;
