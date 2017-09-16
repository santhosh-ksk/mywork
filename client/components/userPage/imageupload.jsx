import React from 'react';
import {Form , Input, Button, Grid, Icon} from 'semantic-ui-react';
import Cookie from 'react-cookie';
import FileUploadProgress  from 'react-fileupload-progress';

export default class IndexComponent extends React.Component {
  constructor() {
     super();
     this.state = {
       preventReload: false
     }
 }
 reRender() {
   this.setState({preventReload: true});
   location.reload();
 }
 render() {
      let route='/uploadimage';
       return (
                // <Form method="post" encType="multipart/form-data" action={route} >
                //   <Input type="file" name="uploadedFile"  accept="media_type" />
                //    <Button color = 'blue' type = "submit" ><Icon name='upload'/>Upload</Button>
                //  </Form>
                 <FileUploadProgress key='ex1' url='http://localhost:3000/uploadimage'
          onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
          onLoad={ (e, request) => {console.log('load', e, request);}}
          onError={ (e, request) => {console.log('error', e, request);}}
          onAbort={ (e, request) => {console.log('abort', e, request);}}
          onClick={this.reRender.bind(this)}
          />
       );
   }
}
