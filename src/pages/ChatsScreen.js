import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Content,
  Text,
  Badge,
  Container,
  Fab,
  Icon,
} from 'native-base';
import appStyles from '../components/appStyles';

export default class ChatScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/mauriolg/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Mas Mawan SIT</Text>
              <Text note>Projectnya udah kelar lek?</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                3:43 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>1</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/buddhasource/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Mas Ringgas SCP</Text>
              <Text note>Hallo, Mas Mawan</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                3:43 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>4</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/buddhasource/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Mas Ringgas SCP</Text>
              <Text note>Hallo, Mas Mawan</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                3:43 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>4</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/vicivadeline/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Mas Dhanang SCP</Text>
              <Text note>Ping</Text>
            </Body>
            <Right>
              <Text note>6:12 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Mas Abdi SHS</Text>
              <Text note>Sikut dulu gaessss</Text>
            </Body>
            <Right>
              <Text note>8:01 am</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Mas Abdi SHS</Text>
              <Text note>Sikut dulu gaessss</Text>
            </Body>
            <Right>
              <Text note>8:01 am</Text>
            </Right>
          </ListItem>
        </Content>
        <Fab style={appStyles.fabColor} position="bottomRight">
          <Icon type="MaterialIcons" name="chat" />
        </Fab>
      </Container>
    );
  }
}