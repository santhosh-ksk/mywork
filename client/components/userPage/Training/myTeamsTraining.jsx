import React from 'react';
import {Grid, Reveal,Header,Image,Button, Modal, Container} from 'semantic-ui-react';
import ProfileModalTraining from './profileModalTraining.jsx';
import request from 'superagent';
const imgUrl=[{"name":"Bruce", "mapped":["Bruce","srt","agile"],"completed":["srt"],"url":"./../src/images/pic11.jpg","mobile":"9856332171","mail":"bruce@wipro.com","designation":"Developer","location":"Bangalore"},
                {"name":"Rose", "mapped":["Rose","srt"],"completed":["srt"],"url":"./../src/images/pic3.jpg","mobile":"8870316256","mail":"rose@wipro.com","designation":"Program Analyst","location":"Chennai"},
                {"name":"Jack", "mapped":["Jack","srt","agile"],"completed":["srt"],"url":"./../src/images/pic4.jpg","mobile":"7708529472","mail":"jack@wipro.com","designation":"Support","location":"BangaloreBangalore"},
                {"name":"Tony", "mapped":["Tony","srt","itil"],"completed":["srt"],"url":"./../src/images/pic5.jpg","mobile":"8122736975","mail":"tony@wipro.com","designation":"Tester","location":"Bangalore"},
                {"name":"Stark", "mapped":["Stark","scm","agile"],"completed":["scm"],"url":"./../src/images/pic6.jpg","mobile":"9894512347","mail":"stark@wipro.com","designation":"Business Analyst","location":"Hyderabad"},
                {"name":"Peter" ,"mapped":["Peter","lean","digiatl"],"completed":["lean"],"url":"./../src/images/pic7.jpg","mobile":"994479802","mail":"peter@wipro.com","designation":"Associate Analyst","location":"Pune"},
                {"name":"Teena", "mapped":["Teena","srt","quality101"],"completed":["quality101"],"url":"./../src/images/pic8.jpg","mobile":"9994871536","mail":"teena@wipro.com","designation":"Developer","location":"Pune"},
                {"name":"Sammy", "mapped":["Sammy","lean","scm"],"completed":["lean"],"url":"./../src/images/pic9.jpg","mobile":"8095581225","mail":"sammy@wipro.com","designation":"Tester","location":"Hyderabad"}

];

export default class MyTeams extends React.Component{
  constructor(props){
    super(props);
    this.state={
      imgUrl:[],
      clicked:false,
      modalData:null
    }
      this.modal=this.modal.bind(this);
      console.log('mapped and completed',this.props);
  }

  modal(data)
  {
    this.setState({clicked:true,modalData:data});
  }

  modalClose(){
    this.setState({clicked:false});
  }

// componentDidMount(){
//   request.get("/profileview").end((err,res)=>{
//     //console.log('response',JSON.parse(res.text));
//     this.setState({imgUrl:JSON.parse(res.text)})
//   })
// }

  render(){
    let dialog=null;
    if(this.state.clicked==true){
      dialog=<ProfileModalTraining open={this.state.clicked} close={this.modalClose.bind(this)} data={this.state.modalData}/>

    }
      return(
        <Container>
      <Grid centered >
              <Grid.Row centered>
                 <Header as='h2'>My Resource Training</Header>
              </Grid.Row>
          <Grid.Row>
          {
               imgUrl.map((item,i)=>{
               return(
              <Grid.Column width={this.props.columns} key={i} style={{marginBottom:"30px"}} onClick={this.modal.bind(this,item)}>
                <Reveal animated='fade'>
                      <Reveal.Content visible style={{paddingLeft:"20%"}}>
                       <Image shape='circular' src={item.url}  size='small' style={{WebkitFilter:'grayscale(100%)', Filter:'grayscale(100%)', WebkitTransistion:'.3s ease-in-out', Transistion: '.3s ease-in-out'}}/>
                      </Reveal.Content>
                      <Reveal.Content hidden style={{paddingLeft:"20%"}}>
                       <Image shape='circular' src={item.url}  size='small'  style={{WebkitFilter:'grayscale(0%)', Filter:'grayscale(0%)'}}/>
                     </Reveal.Content>
                </Reveal>

                <h3>{item.name} - {item.designation}</h3>
               </Grid.Column>
                    )  })
         }
        </Grid.Row>
        {dialog}
       </Grid>
       </Container>
    );
  }
}
