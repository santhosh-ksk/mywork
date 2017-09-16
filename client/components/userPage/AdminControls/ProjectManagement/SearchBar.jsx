import React from 'react';

import { Search } from 'semantic-ui-react';

export default class SearchBar extends React.Component{

  constructor(props){
      super(props);
      this.state={
        isLoading:false,
        searchValue:""
      }
      this.handleSearchResultSelect=this.handleSearchResultSelect.bind(this);
      this.handleSearchChange=this.handleSearchChange.bind(this);
      this.resetComponent=this.resetComponent.bind(this);
  }

  resetComponent(){
    this.setState({ isLoading: false,searchValue: '' })
    var arr=[];
    this.props.handleSearchResults(arr);
  }

  handleSearchResultSelect(e,result){
    this.setState({ searchValue: result.title })
  }

   handleSearchChange(e,value){
     this.setState({ isLoading: true,searchValue:value});
     setTimeout(() => {
       if (this.state.searchValue.length < 1) return this.resetComponent()
       var filter=this.props.searchFilter;
       const re = new RegExp(_.escapeRegExp(this.state.searchValue), 'i')
       const isMatch = (result) => re.test(result[filter]);
       var arr=[];
        _.filter(this.props.data, isMatch).map((item,i)=>{
          arr.push({
            "title":item[filter]
          })
        })
       this.setState({
         isLoading: false,
       })
       this.props.handleSearchResults(arr);
     }, 500)
   }

  render(){
    return(
      <Search loading={this.state.isLoading}
      onResultSelect={this.handleSearchResultSelect}
      onSearchChange={this.handleSearchChange}
      results={this.props.searchResults}
      value={this.state.searchValue}
      open={false}
      placeholder={this.props.placeholder}
     />
    )
  }
}
