// @flow
import axios from 'axios';
import { config } from '../config';

export const http = axios.create({
  baseURL: config.BASE_URL,
});
