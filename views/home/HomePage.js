import React from 'react';
import { StyleSheet, View, Text, Image, Button, Alert } from 'react-native';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  _handlePress() {
    Alert.alert('你点击了按钮');
  }

  _handleLongPress() {
    Alert.alert('长按按钮');
  }

  render() {
    const { name } = this.props;
    const pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>主页</Text>
        <Text>
          欢迎你：
          {name}
        </Text>
        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={{ height: 40 }}
            onPress={this._handlePress}
            title="presss"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            style={styles.longPressBtn}
            onPress={this._handleLongPress}
            title="longPress"
          />
        </View>
        <View style={styles.part}>
          <View
            style={{ flex: 1, height: 50, backgroundColor: 'powderblue' }}
          />
          <View style={{ flex: 1, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ flex: 1, height: 50, backgroundColor: 'steelblue' }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: '#ff7800',
    fontSize: 20,
    alignItems: 'center',
    flex: 1
  },
  imageContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ff7800',
    flexDirection: 'row',
    height: 210,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  },
  part: {
    flex: 1,
    flexDirection: 'row'
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#ff7800'
  },
  longPressBtn: {
    marginTop: 20
  }
});
