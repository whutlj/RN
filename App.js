/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SectionList
} from 'react-native';

import HomePage from './views/home/HomePage';
import TiComponent from './views/home/TextInput';
import CustomBtn from './views/home/CustomBtn';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});
// ScrollView适合组件数量不多的
// FlatList更适合长列表，且个数可以删除，data是列表的数据源，renderItem从数据源中逐个解析数据

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      listData: null,
      movieList: null
    };
  }

  componentDidMount() {
    console.log(Platform.Version);
    this.setState({
      listData: [
        {
          id: '1',
          name: 'lj'
        },
        {
          id: '2',
          name: '帅气'
        },
        {
          id: '3',
          name: '超帅气'
        }
      ]
    });
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.setState((prevState, props) => {
          return { movieList: res.movies };
        });
      });
  }

  _renderList(item) {
    return <Text style={styles.textItem}>{item.name}</Text>;
  }

  _renderMoiveList(item) {
    return (
      <View>
        <Text style={styles.moveTitle}>{item.title}</Text>
        <Text style={styles.moveYear}>{item.releaseYear}</Text>
      </View>
    );
  }

  render() {
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>Welcome to React Native!</Text>
    //   <Text style={styles.instructions}>To get started, edit App.js</Text>
    //   <Text style={styles.instructions}>{instructions}</Text>
    // </View>
    console.log(this.state.listData);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>Hello world!</Text>
          <HomePage name="李杰" />
          {/* <TiComponent /> */}
          <FlatList
            style={styles.flatList}
            data={this.state.listData}
            renderItem={({ item }) => this._renderList(item)}
            keyExtractor={(item) => item.id}
          />
          {this.state.movieList && this.state.movieList.length > 0 ? (
            <FlatList
              data={this.state.movieList}
              renderItem={({ item }) => this._renderMoiveList(item)}
              keyExtractor={(item, index) => item.title}
            />
          ) : null}
          <SectionList
            sections={[
              { title: 'D', data: ['Devin'] },
              {
                title: 'J',
                data: [
                  'Jackson',
                  'James',
                  'Jillian',
                  'Jimmy',
                  'Joel',
                  'John',
                  'Julie'
                ]
              }
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />
          <CustomBtn />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  scrollView: {
    flex: 1
  },
  textItem: {
    marginBottom: 10,
    color: '#ff7800'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  moveTitle: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    color: '#ff7800',
    fontSize: 20,
    backgroundColor: '#cccccc'
  },
  moveYear: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    color: '#666666',
    fontSize: 14,
    height: 44
  }
});
