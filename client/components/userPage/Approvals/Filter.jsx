import React from 'react';

import { Dropdown } from 'semantic-ui-react';

export default class Filter extends React.Component{

  constructor(props){
    super(props);
    this.handleFilterClick=this.handleFilterClick.bind(this);
  }

  handleFilterClick(e,data){
    this.props.applyFilter(data.value);
  }

  render(){

    return(
      <Dropdown text='Filter By' icon='filter' floating labeled button className='icon' style={{marginBottom:"10px",marginLeft:"88%"}}>
        <Dropdown.Menu>
            {
              this.props.filterOptions.map((option) => <Dropdown.Item key={option.value} {...option} onClick={this.handleFilterClick}/>)
            }
          </Dropdown.Menu>
      </Dropdown>
    )
  }
}
