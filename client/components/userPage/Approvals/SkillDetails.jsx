import React from 'react';

import {Segment,Header} from 'semantic-ui-react';

export default class SkillDetails extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{marginTop:"10px",display:this.props.show}}>
                <Segment style={{marginBottom:"0px",borderRadius:"0px"}}>
                  <Header as="h5">Skills Added</Header>
                </Segment>
                <Segment.Group horizontal style={{marginTop:"0px",borderRadius:"0px"}}>
                {
                  this.props.data.Skills.map((skill,j)=>{
                    return(
                      <Segment key={j}>
                      {skill}
                      </Segment>
                    )
                  })
                }
                </Segment.Group>
              </div>
    )
  }
}
