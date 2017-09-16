import React from 'react';
import {Menu} from 'semantic-ui-react';

export default class ComponentSpecificMenu extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Menu pointing secondary size="large">
          {
            this.props.options.map((item,i)=>{
              return(
                  <Menu.Item key={i} name={item.name} active={item.name==this.props.active} onClick={this.props.activeChange}/>
              )
            })
          }
      </Menu>
    )
  }
}
