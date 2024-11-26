import * as React from 'react';

import { Button, styled } from 'react-native-easy-kit';

const CustomComponent = styled('View', {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 15,
});

const Screen = () => {
  return (
    <CustomComponent>
      <Button
        title="Login"
        loading={false}
        color="#ff9dab"
        onPress={() => console.log('Pressed')}
      />

      <Button
        title="Login"
        loading={false}
        color="#000"
        onPress={() => console.log('Pressed')}
      />
    </CustomComponent>
  );
};

export default Screen;
