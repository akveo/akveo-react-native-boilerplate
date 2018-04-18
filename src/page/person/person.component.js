// @flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import type { Person } from '../../model/people.model';

interface Props {
  person: Person;
}

export class PersonComponent extends Component<Props> {
  render() {
    return <Text style={{ padding: 20 }}>{this.props.person.name}</Text>;
  }
}
