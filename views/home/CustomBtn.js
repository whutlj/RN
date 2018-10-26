import React from 'react';
import {
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  Alert
} from 'react-native';

export default class CustomBtn extends React.Component {
  _handlePress() {
    Alert.alert('点击');
  }

  _handleLongPress() {
    Alert.alert('长按');
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this._handlePress}
          underlayColor="red"
          onLongPress={this._handleLongPress}
          style={{ marginBottom: 20, width: 260 }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>我是自定义的按钮</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity
          onPress={this._handlePress}
          underlayColor="white"
          onLongPress={this._handleLongPress}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>我是透明的按钮</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          background={
            Platform.OS === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : ''
          }
          onPress={this._handlePress}
          underlayColor="white"
          onLongPress={this._handleLongPress}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>安卓</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 10
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
