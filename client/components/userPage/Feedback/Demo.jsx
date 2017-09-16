import React from 'react';
import Dropzone from 'react-dropzone';
import { Button } from 'semantic-ui-react'

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picPreview: '',
      picFile:'',
      imagePreviewUrl: ''
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.handlePicSaved=this.handlePicSaved.bind(this);
  }

  handleDrop(acceptedFiles, rejectedFiles){
      this.setState({
        picFile:acceptedFiles[0],
        picPreview:acceptedFiles[0].preview
      })
  }

  handlePicSaved(){
    let data=this.state.picFile;
    this.props.handleChange(data);
  }
  render() {
    return (
      <div>
        <Dropzone
            accept='image/jpeg, image/png'
            onDrop={this.handleDrop}
        />
        <img src={this.state.picPreview} style={{width:'300px', height:'300px'}}/>
        <Button onClick={this.handlePicSaved}>
            upload
        </Button>
      </div>
    );
  }
}
