import React from 'react';
import {
  Card,
  Container,
  Image,
  Grid,
  Header,
  Icon,
  Segment,
  Table,
  Label
} from 'semantic-ui-react';
import Media from 'react-media';


let projects = [{
  imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YDUmxMGuhAtGEymnblbutbwIBjETxTmeDiiXJgtlL_GwykZ-',
  header: 'PRIMARK',
  headerLink: 'https://www.primark.com/en/homepage',
  meta: 'Company',
  description: 'Primark is an international company which is a subsidiary of AB Foods, and is headquartered in Dublin.The companys first store was opened by Arthur Ryan on behalf of the Weston family in June 1962 on 47 Mary Street,Dublin, where a store still remains operative to this day. Primark is an international company which is a subsidiary of AB Foods, and is headquartered in Dublin.The companys first store was opened by Arthur Ryan on behalf of the Weston family in June 1962 on 47 Mary Street,Dublin, where a store still remains operative to this day, Primark is an international company which is a subsidiary of AB Foods, and is headquartered in Dublin.The companys first store was opened by Arthur Ryan on behalf of the Weston family in June 1962 on 47 Mary Street,Dublin, where a store still remains operative to this day',
  descriptionLink: 'https://en.wikipedia.org/wiki/Primark'
}];

let managerDetails = [
{
    image: '../src/images/star_of_the_month/justen.jpg',
    name: 'Justen',
    designation: 'Product Manager',
    arrowName:'arrow right'
  }, {
    image: '../src/images/star_of_the_month/jenny.jpg',
     name: 'Jenny',
    designation: 'Team Lead',
    arrowName:'arrow right'
  }, {
    image: '../src/images/star_of_the_month/nan.jpg',
    name: 'Nan',
    designation: 'Employee',
    arrowName:''
  }
];

export default class pro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      manager:[]
    }
  }

  // componentWillMount() {
  //
  //   request.get("/projectinfo").end((err, res) => {
  //     console.log('result is ', JSON.parse(res.text));
  //     this.setState({
  //       projects:JSON.parse(res.text).projects,  manager:JSON.parse(res.text).managerDetails
  //     });
  //   console.log('response',JSON.parse(res.text).managerDetails);
  // })
  // }
  render() {
    let project =
    <Card fluid >
    {
      projects.map((item,i)=>{
        return(
          <Card.Content key={i}>
          <Grid>
          <Grid.Row>
          <Grid.Column width={3}>
            <Image src={item.imageLink}
              shape='circular'
              />
              </Grid.Column>
              <Grid.Column width={13} style={{marginTop:'20px'}}>
            <Card.Header style={{
              marginTop: '30px'
            }} href={item.headerLink}>{item.header}</Card.Header>
            <Card.Meta>{item.meta}</Card.Meta>
            <Card.Description style={{fontFamily: 'Bellefair serif',fontSize:'20px'}}>{item.description}
              <a style={{
                float: 'right',
                marginTop:'20px'
              }} href={item.descriptionLink}>view more</a>
            </Card.Description>
            </Grid.Column>
            </Grid.Row>
            </Grid>
          </Card.Content>
        );
      })
    }
      </Card>
      // console.log('response1',this.state.manager);
        let manager=<Table style={{width:'60%', margin:'0 auto', marginTop:'50px'}} striped padded>
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell style={{textAlign:'center'}}colSpan='2' verticalAlign='middle'>Organisation Hierarchy</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body  verticalAlign='middle'>
          {managerDetails.map((item, i) => {
            return (

              <Table.Row key={i} width={4}>
                <Table.Cell>
                  <Image src={item.image} size='tiny' centered shape='circular'/>
                </Table.Cell>
                <Table.Cell>
                    <Header as='h2' style={{
                      marginTop: '0px',
                      marginBottom: '0px'
                    }}>
                      {item.name}
                    </Header>
                    <span style={{
                      color: 'grey'
                    }}>
                      {item.designation}
                    </span>
                </Table.Cell>
              </Table.Row>
            );
          })
}
    </Table.Body>
      </Table>
      // console.log('response2',this.state.manager);
    return (

      <Container>
      <Media query="(min-width: 1280px)">
        <Segment padded>{project}
        {manager}</Segment>
      </Media>
      <Media query="(min-width: 768px) and (max-width: 1279px)">
        <Segment>{project}
        {manager}</Segment>
      </Media>
      <Media query="(max-width: 767px)">
        <Segment>{project}
        {manager}</Segment>
      </Media>
      </Container>

    );
  }
}
