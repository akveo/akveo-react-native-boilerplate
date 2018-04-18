// @flow
import type { People } from '../../model/people.model';
import { peopleStore } from '../../store/people.store';
import { peopleApi } from './people.api';

export const peopleService = {
  async loadPeople() {
    const people: People = await peopleApi.getPeople();
    peopleStore.set(people);
  },
};
