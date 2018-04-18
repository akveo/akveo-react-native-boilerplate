// @flow
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class PersonDetailsComponent extends Component<any> {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Name: {params.person.name}</Text>
        <Text>Gender: {params.person.gender}</Text>
        <Text>Height: {params.person.height}</Text>
        <Text>Mass: {params.person.mass}</Text>
      </View>
    );
  }
}
