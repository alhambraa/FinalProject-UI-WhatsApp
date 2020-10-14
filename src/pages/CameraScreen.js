import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Content,
  Text,
  Container,
  Fab,
  Icon,
  Button,
  Separator,
} from 'native-base';
import appStyles from '../components/appStyles';
import {View, Image} from 'react-native';

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <Container>
        <Content>
        <Image
          source={require('../assets/img/picture.jpg')}
          style={{ width: 400, height: 630}}
        />
        </Content>
      </Container>
    );
  }
}