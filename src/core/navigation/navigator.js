// @flow
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { NavigationService, Navigation } from './navigation.service';
import { routes } from './routes';

const StackNav = StackNavigator(routes);

interface Props {
  navigation: Navigation
}

class RootNavigator extends Component<Props> {
  static router = StackNav.router;

  constructor(props: Props) {
    super(props);
    NavigationService.init(props.navigation);
  }

  render() {
    return <StackNav {...this.props} />;
  }
}

export const Navigator = StackNavigator(
  {
    App: {
      screen: RootNavigator,
    },
  },
  {
    headerMode: 'none',
  },
);
