import React from 'react';
import CardTemplate from './CardTemplate.jsx';
import {List,Card,Segment,Header} from 'semantic-ui-react';
import request from 'superagent';
// var news=[
//     {
//       "news":"GST gonna affect all prices from July 1",
//       "source":"Economic Times"
//     },
//     {
//       "news":"Virat kohli becomes No.1 batsman in ODI",
//       "source":"Star Sports"
//     },
//     {
//       "news":"RBI started printing 200rs notes",
//       "source":"Indian Express"
//     },
//     {
//       "news":"Vijaykanth's speech goes viral",
//       "source":"TN Mirror"
//     }
// ]

export default class FlashNews extends React.Component{

  constructor(props){
    super(props);
    this.state={
      newsData:[]
    }
  }

  componentDidMount(){
      request.get("/news").end((err,res)=>{
        this.setState({newsData:JSON.parse(res.text)})
      })
  }

  render(){
    return(
      <CardTemplate head="Flash News" color="orange" showMore>
        <Header sub>Recent News</Header>
        <div style={{width:"100%",color:"#000000", marginRight: '20px', marginTop: '8px'}}>
          <List divided relaxed>
          {
            this.state.newsData.map((item,i)=>{
              return(
                <List.Item key={i}>
                  <List.Icon name='caret right' size='large' verticalAlign='top' />
                  <List.Content style={{width:"100%",color:"#000000",fontFamily: 'Bellefair,serif',fontSize:'15px'}}>
                    <List.Header>{item.news}</List.Header>
                    <List.Item as='a' style={{color:'#2185D0'}}>{item.source}</List.Item>
                  </List.Content>
                </List.Item>
              )
            })
          }
          </List>
        </div>
      </CardTemplate>
    )
  }
}
