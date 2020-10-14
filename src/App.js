import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Right,
  Body,
  Icon,
  Text,
  Tabs,
  Tab,
  ScrollableTab,
  TabHeading,
  Badge,
} from 'native-base';
import ChatsScreen from './pages/ChatsScreen';
import StatusScreen from './pages/StatusScreen';
import CameraScreen from './pages/CameraScreen';
import CallsScreen from './pages/CallsScreen';
import {StatusBar} from 'react-native';
import appStyles from './components/appStyles';
import SettingsScreen from './pages/SettingsScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      StatusBar.setBackgroundColor('#075E54');
    }, 100);
  }
  render() {
    return (
      <Container>
        <Header noLeft style={appStyles.headerBackgroundColor}>
          <Body>
            <Title style={appStyles.appTitle}>WhatsUpps</Title>
          </Body>
          <Right>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="search" />
            </Button>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="more-vert" />
            </Button>
          </Right>
        </Header>
        <Tabs
          tabContainerStyle={{
            elevation: 0,
          }}
          renderTabBar={() => <ScrollableTab />}
          tabBarUnderlineStyle={appStyles.tabBarUnderLine}
          tabBarActiveTextColor="red"
          initialPage={3}
          tabBarBackgroundColor="#075E54">
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#075E54'}}>
                <Icon type="MaterialIcons" name="photo-camera" />
              </TabHeading>
            }>
            <CameraScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#075E54'}}>
                <Text style={appStyles.tabsText}>CHATS</Text>
                <Badge style={appStyles.badge}>
                  <Text style={appStyles.badgeText}>3</Text>
                </Badge>
              </TabHeading>
            }>
            <ChatsScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#075E54'}}>
                <Text style={appStyles.tabsText}>STATUS</Text>
              </TabHeading>
            }>
            <StatusScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#075E54'}}>
                <Text style={appStyles.tabsText}>CALLS</Text>
              </TabHeading>
            }>
            <CallsScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#075E54'}}>
                <Text style={appStyles.tabsText}>SETTINGS</Text>
              </TabHeading>
            }>
            <SettingsScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}