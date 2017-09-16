import React from 'react';

import {Card,Grid,Statistic,Search,Icon,Popup,Button} from 'semantic-ui-react';

import SearchBar from './SearchBar.jsx';

export default class TeamsView extends React.Component{

  constructor(props){
      super(props);
      this.state={
        searchResults:[]
      }
      this.handleSearchResults=this.handleSearchResults.bind(this);
  }

  handleSearchResults(arr){
     this.setState({searchResults:arr})
  }

  render(){
    //console.log(this.state.searchResults);
    console.log(this.props.addTeams);
    var display=null;
    var array=this.props.data;
    if(this.state.searchResults.length>0){
        array=[];
        this.state.searchResults.map((item,i)=>{
          array.push(_.filter(this.props.data, ['Name',item.title])[0]);
        })
    }
    display=array.map((item,i)=>{
      return(
          <Card key={i} raised={true}>
            <Card.Content>
              <Card.Header style={{textAlign:"center"}}>
                {item.Name}
              </Card.Header>
              <Card.Description>
                {item.Description}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Icon name='briefcase' />
                Team Lead:&ensp;{item.TeamLead}
            </Card.Content>
            <Card.Content style={{textAlign:"center"}}>
              <Statistic value={item.Resources.length} label="RESOURCES" size="mini" color='blue' style={{cursor:"pointer"}} onClick={this.props.handleTeamChange.bind(this,item.Name)}/>
            </Card.Content>
          </Card>
      )
    })

    return(
      <Grid style={{margin:"0px"}}>
      <Grid.Row style={{paddingTop:"0px"}}>
      <Grid.Column width={2}>
      </Grid.Column>
        <Grid.Column width={12}>
          <center>
          <SearchBar
           data={this.props.data}
           placeholder="Search Teams"
           searchResults={this.state.searchResults}
           handleSearchResults={this.handleSearchResults}
           searchFilter="Name"/>
          </center>
         </Grid.Column>
        <Grid.Column width={2}>
        <center>
        <Popup
            trigger={<Button icon='add' onClick={this.props.addTeams.bind(this,"AddTeams",this.props.project)}/>}
            content='Add Team'
            position='left center'

          />
        </center>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{padding:"0px"}}>
        <Grid.Column>
          <Card.Group itemsPerRow={3} style={{marginLeft:"-25px"}}>
          {display}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}
