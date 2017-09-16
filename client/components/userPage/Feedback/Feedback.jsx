import React from 'react';
import {Menu, Radio ,Checkbox , Input , Button , Form , Select, TextArea , label , Container, Grid, Segment, Card, Icon, Image, Header, Reveal} from 'semantic-ui-react';
import Demo from './Demo.jsx';
import request from 'superagent';
import FeedbackMenu from './../Common/ComponentSpecificMenu.jsx';

let view, options=[], accounts=[],uploadImage;

const menuOptions = [
  { key: 'Nomination', name: 'Nomination' },
  { key: 'Feedback', name: 'Feedback' }
]

export default class Feedback extends React.Component
{
     constructor(props)
     {
      super(props);
      this.state=
         {
         activeItem:"Nomination",
       flag:false,
       options : [
         {  text: 'General', value: 'General Feedback' },
         {  text: 'Account Specific', value: 'Account Specific' },
      ],
      accounts: [
       {text: 'Primark', value: 'Primark ' },
       {text: 'DDF', value: 'DDF ' },
       {text: 'Nisa', value: 'Nisa ' },
       {text: 'Debenhams', value: ' Debenhams ' },
       {text: ' William Sonoma', value: ' William Sonoma' },
       {text: ' FedEX', value: ' FedEX ' },
       {text: 'Tesco', value: ' Tesco' },

     ],
    activeOption:"",
    empName:'',
    empMailID:'',
    description:''
      }
        this.handlePicSave=this.handlePicSave.bind(this)
     }

     handleItemClick(e, { name }){
     //  console.log(name);
       this.setState({activeItem:name})
     }

    handleOption(e,item)
    {
       this.setState({activeOption:item.value})
    }


    handlePicSave(data){
      request
      .post('/saveimage')
      .attach('file', data)
      .end((err, res)=>{

      })
    }

    changeFlag(){
      this.setState({
        flag:!(this.state.flag)
      })
    }

    handleChange(e, {name, value}) {
      this.setState({[name]: value});
    }

    render()
    {
      //console.log("Status is", this.state.flag);
      var accountDropdown=null;
      if(this.state.activeOption=='Account Specific')
      {
        accountDropdown=<Form.Select options={this.state.accounts} placeholder='Account Specific' label={{ children: 'Choose the Account' }} />;
      }
      if(this.state.activeItem=="Feedback")
      {
         view= <Container>
               <Grid celled>
                  <Grid.Row  columns={1}>
                        <Grid.Column>
                             <h1>Feedback</h1>
                             <Segment basic>
                              <Form >
                                <Form.Group widths='50%'>
                                  <Form.Select options={this.state.options} placeholder='Category' label={{ children: 'Choose the Category' }} onChange={this.handleOption.bind(this)}/>
                                  {accountDropdown}
                                </Form.Group>
                                <Form.TextArea required label='Description' placeholder='Tell us more about your Feedback...' />
                                <Form.Checkbox label='I wish to go anonymous' />
                                <Button color='black' floated='right' invereted type='submit' >Submit</Button>
                              </Form>
                            </Segment>
                         </Grid.Column>
                 </Grid.Row>
               </Grid>
              </Container>
      }
      if(this.state.flag){
        //console.log('status comes in');
        uploadImage=<center><Demo handleChange={this.handlePicSave} /></center>
      }
      else if (!this.state.flag) {
        uploadImage='';
      }
      if(this.state.activeItem=="Nomination")
      {
        view= <Container>
              <Grid celled>
                 <Grid.Row  columns={1}>
                       <Grid.Column>
                         <h1>Nomination</h1>
                         <Segment basic>
                            <Form>
                              <Form.Group widths='equal'>
                                <Form.Input name='empName' value={this.state.empName}  onChange={this.handleChange.bind(this)} required label='Name of the Employee' placeholder='Employee Name' />
                                <Form.Input name='empMailID' value={this.state.empMailID} onChange={this.handleChange.bind(this)}  required label='Mail id of the Employee' placeholder='Mail id' />
                              </Form.Group>
                              <Form.TextArea name='description' value={this.state.description} onChange={this.handleChange.bind(this)} required label='Description' placeholder='Reason for your Nomination..' />
                                  <h5 style={{marginLeft:'25px'}}>Have supporting docs?upload it</h5>
                                  <Radio checked={this.state.flag} toggle onClick={this.changeFlag.bind(this)} style={{marginLeft:'50px', backgroundColor:'grey',borderRadius:'10px'}}/>
                                  {uploadImage}
                               <Button color='black' floated='right'  type='submit' >Submit</Button>
                            </Form>

                        </Segment>
                       </Grid.Column>
               </Grid.Row>
             </Grid>
            </Container>
          //  console.log('values', this.state.empName, this.state.empMailID, this.state.description);
      }
        return(
          <Container>
          <FeedbackMenu options={menuOptions} active={this.state.activeItem} activeChange={this.handleItemClick.bind(this)}/>
          <Grid>
            {view}
          </Grid>
          </Container>
        );
    }
}
