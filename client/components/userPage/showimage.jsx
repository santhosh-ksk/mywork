import React from 'react';
import {Grid, Header,Image,Button, Icon} from 'semantic-ui-react';
import request from 'superagent';

let path='./../../server/Files/';
export default class MyTeams extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

deleteImage(data){
  //console.log('deleteImage', data);
  request.delete("/deleteimage").send({"imgurl":data}).end((err,res)=>{
    console.log('response after deleted',JSON.parse(res.text));
    this.props.update(JSON.parse(res.text));
  })

}
render(){
  //console.log(this.props.url,"props data");
    return(
      <Grid centered >
              <Grid.Row centered>
                 <Header as='h2'>Clients</Header>
              </Grid.Row>
          <Grid.Row>
          {
               this.props.url.map((item,i)=>{
               return(
              <Grid.Column key={i}>
                       <Image shape='circular' size='huge' src={path+item}/>

                        <Button onClick={this.deleteImage.bind(this,item)}>
                          <Icon name='delete' />Delete
                        </Button>

               </Grid.Column>
                    )  })
         }
        </Grid.Row>
       </Grid>
    );
  }
}
