import React from 'react';
import { View } from 'react-native';
import { render } from 'react-native-testing-library';

const testComponentTestId = '@app/root';

class TestComponent extends React.Component {
  render() {
    return (
      <View testID={testComponentTestId}/>
    );
  }
}

describe('@sample: TestComponent checks', () => {

  it('renders properly', async () => {
    const component = render(
      <TestComponent/>,
    );

    const testComponent = component.getByTestId(testComponentTestId);
    expect(testComponent).not.toBeNull();
    expect(testComponent).not.toBeUndefined();
  });

});
