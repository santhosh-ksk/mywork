import React from 'react';
import {Grid} from 'semantic-ui-react';
import request from 'superagent'
import Upload from './imageupload.jsx';
import ShowImage from './showimage.jsx';

export default class Client extends React.Component{
  constructor(props){
    super(props);
    this.state={
      imgUrl:[]
    }
  }
  componentDidMount(){
    request.get("/clientimage").end((err,res)=>{
      //console.log('response',JSON.parse(res.text));
      this.setState({imgUrl:JSON.parse(res.text)})
    })
  }

  updateImage(data){
    this.setState({imgUrl:data})
  }

  render(){
    return(
      <Grid>
        <Grid.Row centered style={{paddingTop:'100px'}}>
          <Grid.Column >
          <Upload />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ShowImage url={this.state.imgUrl} update={this.updateImage.bind(this)}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
