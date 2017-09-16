import React from 'react';

import { Grid, Image, Icon, Header, Container, Card, Item } from 'semantic-ui-react';
import CardTemplate from './CardTemplate.jsx';

import SwipeableViews from 'react-swipeable-views';
import autoPlay from 'react-swipeable-views-utils/lib/autoPlay';
const AutoPlaySwipeableViews= autoPlay(SwipeableViews);
import request from 'superagent';
// const star=[
//   {
//    image:'../src/images/star_of_the_month/stevie.jpg',
//    header:'stevie',
//    meta:'Team A',
//    description:'Project A'
//  },
//  {
//    image:'../src/images/star_of_the_month/jenny.jpg',
//    header:'jenny',
//    meta:'Team B',
//    description:'Project B'
//  },
//  {
//    image:'../src/images/star_of_the_month/justen.jpg',
//    header:'stevie',
//    meta:'Team C',
//    description:'Project C'
//   },
//   {
//     image:'../src/images/star_of_the_month/nan.jpg',
//     header:'nan',
//     meta:'Team D',
//     description:'Project D'
//   },
//   {
//     image:'../src/images/star_of_the_month/veronika.jpg',
//     header:'veronika',
//     meta:'Team E',
//     description:'Project E'
//   }
// ];
export default class starofmonth extends React.Component{
  constructor(props){
    super(props);
    this.state={
      star:[]
    }
  }

  componentDidMount(){
      request.get("/star").end((err,res)=>{
        this.setState({star:JSON.parse(res.text)})
      })
  }

  render(){
    const styles = {
      slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
      },
      slide1: {
        background: '#FEA900',
      },
      slide2: {
        background: '#B3DC4A',
      },
      slide3: {
        background: '#6AC0FF',
      },
    };
    return(
        <CardTemplate
          head='Star of the Month'
        >
          <AutoPlaySwipeableViews direction='decremental' interval={2000} >
          {
            this.state.star.map((item,i)=>{
              return(
                <div key={i}>
                  <Item.Group>
                    <Item>
                    <Item.Image size='small' src={item.image} />

                    <Item.Content>
                      <Item.Header as='a'>{item.header}</Item.Header>
                      <Item.Meta>
                        {item.meta} - {item.description}
                      </Item.Meta>
                      <Item.Description>Achievement</Item.Description>

                    </Item.Content>
                    </Item>
                  </Item.Group>
                </div>
              );
            })
          }
          </AutoPlaySwipeableViews>
        </CardTemplate>
    );
  }
}
