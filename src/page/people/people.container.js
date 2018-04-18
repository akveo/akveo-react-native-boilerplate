// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { peopleService } from '../../service/people/people.service';
import { peopleVM } from './people.vm';
import { route, NavigationService } from '../../core/navigation';
import { PeopleComponent } from './people.component';
import { Person } from '../../model/people.model';

@observer
export class PeopleContainer extends Component<any> {
  componentDidMount() {
    peopleService.loadPeople();
  }

  personClick(person: Person) {
    NavigationService.navigate(route.Details, { person });
  }

  searchQueryChanged(searchQuery: string) {
    peopleVM.search(searchQuery);
  }

  render() {
    return (
      <PeopleComponent
        people={peopleVM.people}
        personClick={person => this.personClick(person)}
        searchQuery={peopleVM.searchQuery}
        searchQueryChange={searchQuery => this.searchQueryChanged(searchQuery)}
      />
    );
  }
}
