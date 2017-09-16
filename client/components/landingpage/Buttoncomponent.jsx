import React from 'react';
import { Button,Grid,Icon} from 'semantic-ui-react'
export default class Buttoncomponent extends React.Component{
render()
  {
    return(

    <Grid centered columns={1}>
    <Grid.Row >
    <Grid.Column>
    <center>


                 <Button animated inverted size='small' circular color="red">
                     <Button.Content visible>Proceed</Button.Content>
                     <Button.Content hidden>
                      <Icon name='right arrow' />
                     </Button.Content>
                 </Button>
<br></br><br></br><br></br><br></br>


  </center>




    </Grid.Column>
    </Grid.Row>
    </Grid>


    );
  }
}
