// @flow
import { http } from '../../core/http/http';
import type { People } from '../../model/people.model';

export const peopleApi = {
  async getPeople(): Promise<People> {
    const res = await http.get('people');
    return res.data.results;
  },
};
