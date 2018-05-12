import React from 'react';
import { Tracking, TrackingSchema } from '/imports/api/tracking/tracking';
import { Grid, Header, Tab, List, Label, Checkbox, Input, Image } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';

/** Renders the Page for adding a document. */
class ViewGraphs extends React.Component {
  state = {}
  handleClick = (e, { value }) => this.setState({ value })

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const panes = [
      {
        menuItem: 'Display', pane: (
            <Tab.Pane key='display'>
              <Header as="h4">Graph Types</Header>
              <List>
                <List.Item><Checkbox label="General Cluster"/></List.Item>
                <List.Item><Checkbox label="Room Cluster"/></List.Item>
                <List.Item><Checkbox label="Infection Tree"/></List.Item>
                <List.Item><Checkbox label="Node Activity"/></List.Item>
              </List>
            </Tab.Pane>
        )
      },
      {
        menuItem: 'Information', pane: (
            <Tab.Pane key='information'>
              <Header as="h4">Node Information</Header>
              <List>
                <List.Item><Checkbox label="Known Vaccinated"/></List.Item>
                <List.Item> <Checkbox label="Known Infected"/></List.Item>
              </List>
            </Tab.Pane>
        )
      },
      {
        menuItem: 'Specifications',
        pane: (
            <Tab.Pane key='specifications'>
              <Header as="h4">Contact Information</Header>
              <Grid columns={3}>
                <Grid.Column>
                  <List>
                    <List.Item><Header as="h5">Contact Type</Header></List.Item>
                    <List.Item><Checkbox label="Airborne" onClick = {this.handleClick}/></List.Item>
                    <List.Item><Checkbox label="Droplet"/></List.Item>
                    <List.Item><Checkbox label="Physical"/></List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header as="h5">Contact Duration (Strength)</Header>
                  <Input placeholder = "Enter Duration" label='seconds' labelPosition='right'/>
                </Grid.Column>
                <Grid.Column></Grid.Column>
              </Grid>
            </Tab.Pane>
        )
      },
    ];
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">View Graphs</Header>
            <Tab panes={panes} renderActiveOnly={false}/>
            <Image src='images/Gantt.PNG' centered/>
            <Image src='images/forcetrackingshort.PNG' centered/>
            <Image src='images/forcetrackinglong.PNG' centered/>
          </Grid.Column>
        </Grid>
    );
  }
}


export default ViewGraphs;
