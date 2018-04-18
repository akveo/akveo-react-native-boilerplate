// @flow
import { PeopleContainer } from '../../page/people/people.container';
import { PersonDetailsComponent } from '../../page/personDetails/personDetails.component';

export const route = {
  People: 'People',
  Details: 'Details',
};

export const routes = {
  [route.People]: {
    screen: PeopleContainer,
  },
  [route.Details]: {
    screen: PersonDetailsComponent,
  },
};
