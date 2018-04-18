// @flow
import { computed, observable, action } from 'mobx';
import type { People } from '../../model/people.model';
import { peopleStore } from '../../store/people.store';

export const peopleVM = new class {
  @observable
  searchQuery: string = '';

  @computed
  get people(): People {
    return peopleStore.people.filter(person => person.name.includes(this.searchQuery));
  }

  @action
  search(query: string) {
    this.searchQuery = query;
  }
}();
