import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

export default class TiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(text) {
    this.setState({ text });
    console.log('点击');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(' ')
            .map((word) => word && '🍕')
            .join(' ')}
        </Text>
        <TextInput style={styles.input} placeholder="请输入要翻译的文字" onChangeText={(text) => this.changeText(text)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    height: 40
  }
});
