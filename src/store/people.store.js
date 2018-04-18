// @flow
import { observable, action } from 'mobx';
import type { People } from '../model/people.model';

export const peopleStore = new class {
  @observable
  people: People = [];

  @action
  set(people: People) {
    this.people = people;
  }
}();
