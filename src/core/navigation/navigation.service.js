// @flow

export interface Navigation {
  navigate: (string, any) => void;
}

export const NavigationService = new class {
  navigation: Navigation;

  init(navigation: Navigation) {
    this.navigation = navigation;
  }

  navigate(screen: string, payload: any = {}) {
    this.navigation.navigate(screen, payload);
  }
}();
