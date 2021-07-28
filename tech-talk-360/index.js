import React from 'react';
import Info from './src/components/Info';
import Figure from './src/components/Figure';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';

// view site here for live reload: http://localhost:8081/index.html?hotreload

export default class tech_talk_360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Welcome to Tech Talk 360</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#00B0FF',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 80,
  },
});

AppRegistry.registerComponent('Info', () => Info);
AppRegistry.registerComponent('Figure', () => Figure);
AppRegistry.registerComponent('tech_talk_360', () => tech_talk_360);
