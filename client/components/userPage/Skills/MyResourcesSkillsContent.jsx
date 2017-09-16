/*
  -----------------------------
  
  -----------------------------
*/

import React from 'react';

// Semantic UI imports
import { Segment
       } from 'semantic-ui-react';

// For Custom Imports
import MyresourcesSkillsFilterBySkill from './MyresourcesSkillsFilterBySkill.jsx';
import MyresourcesSkillsFilterByResource from './MyresourcesSkillsFilterByResource.jsx';

export default class MyResourcesSkillsContent extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    
    // }
  }

  render(){
    // const {  } = this.state; 
    const { val, type } = this.props;
    
    return(
        
        <Segment
            loading={false}
            style={{width: '100%',
                minHeight: '300px',
                marginTop: '50px',
                borderRadius: '0px',
                border: '0px',
                boxShadow: '0px 0px',
                padding: '0',
                zIndex:0
              }}>
          <div>
            {(type == 'skill') &&
              <MyresourcesSkillsFilterBySkill searchVal={val} />
            }
            {(type == 'resource') &&
              <MyresourcesSkillsFilterByResource searchVal={val} />
            }
          </div>
        </Segment>
        
    );
  }
}
