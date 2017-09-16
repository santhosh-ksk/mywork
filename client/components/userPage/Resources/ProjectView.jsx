import React from 'react';
import {Header, Segment, Icon} from 'semantic-ui-react';

export default class ProjectView extends React.Component{
  constructor(props){
    super(props);
  }
  projectinfos()
  {
      let projview={
                    information:'Project Information',
                    Projectname:" Name : Ahold ",
                    Managername:" Name : Nishanth Batnakar",
                    Teamname:" Name : Team 1 ",
                    Rolename:" Name : Developer",
                    }
        let projFla=true,
            personalFla=false;
        this.props.projectinf(projview,projFla,personalFla);

  }
  render(){
    return(
      <Segment style={{cursor:"default"}} basic onClick={this.projectinfos.bind(this)}><Header as='h5'><Icon name='travel'/> Project Information</Header></Segment>
    );
  }
}
