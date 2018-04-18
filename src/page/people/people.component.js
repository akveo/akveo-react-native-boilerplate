// @flow
import React, { Component } from 'react';
import { Button, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { observer } from 'mobx-react';
import { PersonComponent } from '../person/person.component';
import type { People, Person } from '../../model/people.model';
import I18n from '../../core/locale';
import { locale } from '../../core/locale/locale';

interface Props {
  people: People;
  personClick: (Person) => void;
  searchQuery: string;
  searchQueryChange: (string) => void;
}

@observer
export class PeopleComponent extends Component<Props> {
  renderSearch() {
    const style = {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 40,
    };

    return (
      <View style={style}>
        <TextInput
          value={this.props.searchQuery}
          placeholder={I18n.t(locale.search)}
          onChangeText={searchQuery => this.props.searchQueryChange(searchQuery)}
        />
        <Button title="Clear" onPress={() => this.props.searchQueryChange('')} />
      </View>
    );
  }

  renderPeople() {
    const { people } = this.props;

    if (people && people.length) {
      return people.map(person => this.renderPerson(person));
    }

    return <Text>Loading...</Text>;
  }

  renderPerson(person: Person) {
    return (
      <TouchableHighlight key={person.name} onPress={() => this.props.personClick(person)} >
        <PersonComponent person={person} />
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View>
        {this.renderSearch()}
        {this.renderPeople()}
      </View>
    );
  }
}
