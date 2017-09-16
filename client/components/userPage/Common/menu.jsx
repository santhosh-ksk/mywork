import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';

const menuItems=[{"name":"Home","icon":"home"},
                  {"name":"Project","icon":"travel"},
                  {"name":"Skills","icon":"star"},
                  {"name":"Resources","icon":"users"},
                  {"name":"WSR","icon":"newspaper"},
                  {"name":"Leave Plans","icon":"calendar"},
                  {"name":"Training","icon":"book"},
                  {"name":"Approvals","icon":"checkmark box"},
                  {"name":"Feedback","icon":"talk"},
                  {"name":"Admin Controls","icon":"user"}
                ];

export default class MenuList extends React.Component{

  constructor(props){
      super(props);
  }

  render() {

   return (
     <Menu icon='labeled' vertical inverted style={{borderRadius:"0px",width:"100%"}}>
     {
       menuItems.map((item,i)=>{
         return(
           <Menu.Item key={i} active={this.props.activeItem==item.name} onClick={this.props.activeItemChange.bind(this,item.name)}>
             <Icon name={item.icon} />
             {item.name}
           </Menu.Item>
         )
       })
     }
     </Menu>
   )
 }
}
