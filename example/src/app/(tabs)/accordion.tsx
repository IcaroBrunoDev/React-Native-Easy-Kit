import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Accordion, Text, useTheme } from 'react-native-easy-kit';
import { fakeFAQ } from '../../utils/fakers';

import { MaterialIcons } from '@expo/vector-icons';

const AccordionScreen = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <FlatList
        data={fakeFAQ}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <Accordion
            icon={
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                color={colors.white}
              />
            }
            title={item.title}
          >
            <Text style={{ color: colors.white }}>{item.text}</Text>
          </Accordion>
        )}
      />
    </SafeAreaView>
  );
};

export default AccordionScreen;
