/*
  -----------------------
  Card Template Component
  -----------------------
*/

//----------------------------------------------------------
// Properties used :
//  - Head [String]
//  - showMore [Boolean]
//  - onMoreClicked [Function]
//  - buttonText [String]
//----------------------------------------------------------
//----------------------------------------------------------
// eg :
// <CardTemplate
//   head='Announcement'
//   onMoreClicked={this.moreClicked}
//   buttonText='show more'
//   showMore>
//      <--Contents-->
// </CardTemplate>
//----------------------------------------------------------

import React from 'react';

import { Icon,
         Button,
         Card
       } from 'semantic-ui-react';

export default class CardTemplate extends React.Component{

  moreClicked()
  {
    if(this.props.onMoreClicked != undefined)
    { this.props.onMoreClicked(this.props.head);}
  }

  render(){
    const styles = {
        cardStyle: {
          // background:"url(./../../src/images/Homepage/b1.jpg) no-repeat",
          // backgroundSize: '100% 100%',
          // backgroundColor: 'red',
          backgroundColor:"rgba(255,255,255,0.9)"
        },
      }

    var heading = this.props.head;
    const contents = this.props.children;
    var showMore = this.props.showMore;

    if(this.props.buttonText != undefined)
    {
      var buttonText = this.props.buttonText;
    }
    else
    {
      var buttonText = 'More';
    }

    if (showMore != true && showMore != false)
    {
      showMore=false;
    }

    return(
      <Card fluid style={styles.cardStyle}>
        <Card.Content style={{minHeight: '47px', maxHeight: '47px'}}>
          <Card.Header style={{float: 'right'}}>
            {heading}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            {contents}
          </Card.Description>
        </Card.Content>

        {showMore &&
          <Card.Content extra>
            <Button
                primary
                size='mini'
                style={{float: 'right'}}
                onClick={this.moreClicked.bind(this)}>
                    {buttonText} <Icon name='arrow circle right' />
            </Button>
          </Card.Content>
        }

      </Card>
    );
  }
}
// <Icon name='erase' size='large' color={color} />
