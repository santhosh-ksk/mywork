
import React from 'react';
import CardTemplate from './CardTemplate.jsx';
import { Card,
         Header,
         Icon,
         Button,
         Grid,
         Modal,
         Form,
         TextArea,
         Input,
         List,
         Divider,
         Segment
       } from 'semantic-ui-react';
import request from 'superagent';

       export default class TechForum extends React.Component{
         constructor(props){
           super(props);
           this.state={
             data:[],
             answerOpen:false,
             answerName:"",
             answer:"",
             questionIndex:0,
             viewAllOpen:false,
             answerError:false,
             nameError:false
           }
           this.handleAnswerOpen=this.handleAnswerOpen.bind(this);
           this.handleAnswerChange=this.handleAnswerChange.bind(this);
           this.handleAnswerNameChange=this.handleAnswerNameChange.bind(this);
           this.handleAnswerSubmit=this.handleAnswerSubmit.bind(this);
           this.handleViewAllOpen=this.handleViewAllOpen.bind(this);
           this.handleModalClose=this.handleModalClose.bind(this);
         }

         componentDidMount(){
            request.get("/techForum").end((err,res)=>{
              this.setState({data:JSON.parse(res.text)})
            })
         }

         handleAnswerOpen(i){
           this.setState({answerOpen:true, questionIndex:i})
         }

         handleAnswerChange(e){
           if(this.state.answerError==true){
             this.setState({answerError:false,answer:e.target.value})
           }
           else{
           this.setState({answer:e.target.value})
         }
         }

         handleAnswerNameChange(e){
           if(this.state.nameError==true){
             this.setState({nameError:false,answerName:e.target.value})
           }
           else{
             this.setState({answerName:e.target.value})
           }
         }

         handleModalClose(){
           this.setState({answerOpen:false,questionIndex:0,viewAllOpen:false,answer:"",answerName:"",nameError:false,answerError:false})
         }

         handleAnswerSubmit(){
           if(this.state.answer==""&&this.state.answerName==""){
             this.setState({answerError:true,nameError:true})
           }
           else if(this.state.answer==""||this.state.answerName==""){
             this.setState({answerError:(this.state.answer==""),nameError:(this.state.answerName=="")})
           }
           else{
             request.put("/techForum/addAnswer").send({"name":this.state.answerName,"answer":this.state.answer,"qnIndex":this.state.questionIndex}).end((err,res)=>{
               this.setState({data:JSON.parse(res.text),answerOpen:false,answer:"",answerName:"",questionIndex:0,viewAllOpen:false})
             })
            //  var arr=this.state.data;
            //
            //  arr[this.state.questionIndex].answers.unshift(obj);
           }
         }

         handleViewAllOpen(i){
             this.setState({viewAllOpen:true, questionIndex:i})
         }

         render(){

           const styles={
             segmentStyle : {
               padding: '0px 2px',
               boxShadow: '0 0px 0px 0 rgba(34,36,38,.15)',
               margin: '0px'
             }
           }
           var color="";
           var answerModal= null;
           var viewAllModal=null;
           if(this.state.data.length>0){
           answerModal=<Modal open={this.state.answerOpen}>
                               <Modal.Header>{this.state.data[this.state.questionIndex].question}</Modal.Header>
                                 <Modal.Content>
                                       <Form>
                                         <Form.Field
                                             id='form-textarea-control-opinion'
                                             value={this.state.answer}
                                             onChange={this.handleAnswerChange}
                                             control={TextArea}
                                             label='Answer'
                                             placeholder='Your Answer'
                                             style={{minHeight:"200px"}}
                                             error={this.state.answerError}/>

                                        </Form>


                                        <Input
                                           type='text'
                                           placeholder='Your Name'
                                           action
                                           value={this.state.answerName}
                                           onChange={this.handleAnswerNameChange}
                                           error={this.state.nameError}
                                           style={{marginTop:"10px",marginRight:"10px",width:"50%"}}>
                                         <input />
                                         <Button type='submit' primary onClick={this.handleAnswerSubmit}>Submit</Button>
                                        </Input>

                                     <Button style={{marginTop:"10px",marginRight:"10px"}} onClick={this.handleModalClose}>
                                       Cancel
                                   </Button>

                                 </Modal.Content>
                             </Modal>


               viewAllModal= <Modal
                                   open={this.state.viewAllOpen}
                                   onClose={this.handleviewAllClose}
                                   closeOnDimmerClick={false}
                                   closeOnEscape={false}>
                                       <Modal.Header>{this.state.data[this.state.questionIndex].question}</Modal.Header>
                                       <Modal.Content style={{paddingTop: '5px', paddingBottom: '10px'}}>
                                       <List divided verticalAlign='middle'>
                                       {
                                         this.state.data[this.state.questionIndex].answers.map((item,i)=>{
                                           return(
                                             <List.Item key={i}>
                                              <List.Content style={{paddingTop: '10px', paddingBottom: '7px'}}>
                                               <List.Description style={{fontSize:"16px",padding:"2px 0px", paddingBottom: '3px'}}>
                                                 {item.answer}
                                               </List.Description>

                                                <span className='date' style={{fontSize:"12px",color:"rgba(0,0,0,.4)"}}>
                                                 Answer by <b>{item.name}</b>&nbsp;-  25 June 2017 10.01 AM
                                                </span>


                                              </List.Content>
                                            </List.Item>
                                           )
                                         })
                                       }
                                       </List>
                                       </Modal.Content>
                                       <Modal.Actions>
                                       <Form>
                                         <Form.Field
                                             id='form-textarea-control-opinion'
                                             autoHeight
                                             value={this.state.answer}
                                             onChange={this.handleAnswerChange}
                                             control={TextArea}
                                             error={this.state.answerError}
                                             placeholder='Can you answer this question?' />
                                        </Form>
                                        <div style={{width: '100%', textAlign: 'left'}}>
                                          <Input
                                             type='text'
                                             placeholder='Your Name'
                                             error={this.state.nameError}
                                             action
                                             value={this.state.answerName}
                                             onChange={this.handleAnswerNameChange}
                                             id='form-input-control-first-name'
                                             style={{marginTop:"10px",marginRight:"10px", width: '50%', float: 'left'}}>
                                           <input />
                                           <Button type='submit' primary onClick={this.handleAnswerSubmit}>Submit</Button>
                                          </Input>
                                          </div>

                                        <Button style={{marginTop:"10px",marginRight:"37.5%"}} onClick={this.handleModalClose}>
                                          Cancel
                                      </Button>

                                       </Modal.Actions>
                                   </Modal>
                }


           return(
             <div >
               <CardTemplate head="Tech Forum" color="blue" showMore buttonText='Show all' >
                 <Header sub>Recent Posts</Header>

                 {
                   this.state.data.map((item,i)=>{
                     if(item.answers.length==0){
                       color="red";
                     }
                     else{
                       color="green";
                     }
                     return(
                       <Card key={i} fluid style={{margin:"3px 0px", marginRight: '15px',backgroundColor:"rgba(255,255,255,0)"}}>
                       <Grid style={{padding:"0px 15px"}}>
                         <Grid.Row>
                           <Grid.Column width={14} style={{padding:"0px"}}>
                           <Card fluid style={{backgroundColor:"rgba(255,255,255,0)"}}>
                           <Card.Content>
                             <Card.Meta>
                                 <span className='date' style={{fontSize:"12px"}}>
                                   Question by <b>{item.name}</b> at {item.time}
                                 </span>

                             </Card.Meta>
                             <Card.Header style={{marginTop:"0px",marginBottom:"5px"}}>
                               {item.question}
                             </Card.Header>
                             <Card.Meta>
                               <span className='date' style={{fontSize:"12px"}}>
                                  Answer by <b>{item.answers[0].name}</b> 10 mins ago
                               </span>
                             </Card.Meta>
                             <Card.Description style={{margin:"0px"}}>
                               {item.answers[0].answer}
                             </Card.Description>
                           </Card.Content>
                           <Card.Content extra>
                             <a style={{color:"#1e70bf"}} onClick={this.handleAnswerOpen.bind(this, i)}>
                               <Icon name='reply' />
                                 Answer this question
                            </a>
                         </Card.Content>
                         </Card>
                           </Grid.Column>
                           <Grid.Column width={2} style={{padding:"0px"}}>
                           <center>
                             <h1 style={{marginTop:"20%",marginBottom:"0px",color:color}}>{item.answers.length}</h1>
                             <Card.Description>
                               Answers
                             </Card.Description>
                           </center>
                           <div style={{marginTop:"25%"}}>
                           <center>
                             <a onClick={this.handleViewAllOpen.bind(this,i)}>
                                 View All
                            </a>
                            </center>
                            </div>
                           </Grid.Column>
                         </Grid.Row>
                         </Grid>
                     </Card>

                     )
                   })
                 }
                   {answerModal}
                   {viewAllModal}
               </CardTemplate>
             </div>
           )
         }
       }
