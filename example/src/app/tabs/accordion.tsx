import React from 'react';
import { Accordion, Button, styled } from 'react-native-easy-kit';

const View = styled('View', {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 5,
});

const RenderAccordion = () => {
  return (
    <View>
      <Accordion title="Accordion" Icon={''}>
        <Button title="Button inside Accordion" onPress={() => {}} />
      </Accordion>
    </View>
  );
};

export default RenderAccordion;