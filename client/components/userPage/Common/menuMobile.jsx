import React from 'react';
import Menu from './menu.jsx';

import {Sidebar} from 'semantic-ui-react';

export default class MenuList extends React.Component{

  constructor(props){
      super(props);
  }

  render() {

   return (
     <Sidebar animation='overlay' width='thin' visible={this.props.visible}>
         <Menu activeItem={this.props.activeItem} activeItemChange={this.props.activeItemChange}/>
     </Sidebar>
   )
 }
}
