import React from 'react';

import {Image} from 'semantic-ui-react';

import SearchBar from './SearchBar.jsx';

var data=[];

export default class TeamsView extends React.Component{

  constructor(props){
      super(props);
      this.state={
        searchResults:[]
      }
      this.handleSearchResults=this.handleSearchResults.bind(this);
  }

  componentWillMount(){
    this.props.data.map((item,i)=>{
       item.Resources.map((details,j)=>{
         data.push(details);
       })
    })
  }

  componentWillUnmount(){
    //console.log("Unmount");
      data=[];
  }

  handleSearchResults(arr){
     this.setState({searchResults:arr})
  }

  render(){
    //  console.log(data.length);
      var display=null;
      //console.log(this.state.searchResults);
      var array=data;

      if(this.state.searchResults.length>0){
          array=[];
          this.state.searchResults.map((details,i)=>{
            //console.log(_.filter(data,['name',details.title])[0]);
            array.push(_.filter(data,['name',details.title])[0]);
          })
      }


    return(
      <div>
      <center>
      <SearchBar
       data={data}
       placeholder="Search Resources"
       searchResults={this.state.searchResults}
       handleSearchResults={this.handleSearchResults}
       searchFilter="name"
       />
     <Image.Group size='small'>
      {
        array.map((info,j)=>{
          return(
            <Image shape='circular' src={info.url} key={j} style={{padding:"10px"}} label={info.name}/>
          )
        })
      }
     </Image.Group>
     </center>
     </div>
    )
  }
}
