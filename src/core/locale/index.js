// @flow
import I18n from 'react-native-i18n';
import { en } from './en';
import { ru } from './ru';

I18n.fallbacks = true;

I18n.translations = {
  en,
  ru,
};

export default I18n;
