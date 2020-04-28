/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      message: null,
      list: [],
    };
  }

  onChangeText = (value) => {
    this.setState({value: value});
  };

  handleSubmit = () => {
    this.setState({message: this.state.value}, this.addListItem);
  };

  addListItem = () => {
    this.setState({list: [...this.state.list, this.state.message]});
  };

  render() {
    const {value, message, list} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <TextInput
                  style={{height: 40, borderColor: 'teal', borderWidth: 1}}
                  onChangeText={(text) => this.onChangeText(text)}
                  value={value}
                />
                <Button title="Submit" onPress={this.handleSubmit} />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.messageTitle}>
                  Message{' '}
                  {message ? 'is displayed below' : 'will display below'}
                </Text>
                <Text style={styles.sectionDescription}>{message}</Text>
              </View>
              <View>
                <Text style={styles.underline}>History</Text>
                <FlatList
                  data={list}
                  renderItem={({item}) => (
                    <Text style={styles.sectionDescription}>{item}</Text>
                  )}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  messageTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'teal',
  },
  underline: {
    textDecorationLine: 'underline',
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
