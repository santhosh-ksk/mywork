import React from 'react';
import Header from './header.jsx';
import ReactPlayer from 'react-player'
import { Grid, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
export default class Welcomepage extends React.Component{
  render(){
    return(
     <div style={{zIndex: '30'}}>

         <Grid centered columns={2}>
         <Grid.Column >

                 <div id="video" style={{height:"500px",marginTop:"-100px"}} >

                    <div className="player" >
                      <ReactPlayer url='https://www.youtube.com/embed/MlDw4mIieAQ' controls={true}  width="100%" />
                    </div>



                    <br />
                    <Button animated secondary >
                        <Button.Content visible>Proceed to the Next Page</Button.Content>
                        <Button.Content hidden>
                          <Icon name='right arrow' />
                        </Button.Content>
                   </Button>
              </div>

        </Grid.Column>
        </Grid>

    </div>
  );
  }
}
