import React, { useState } from 'react';

import { SelectPicker, styled, useTheme } from 'react-native-easy-kit';

import { Ionicons } from '@expo/vector-icons';
import type { Theme } from '../../theme';

const View = styled('View', {
  flex: 1,
  padding: '$2',
  justifyContent: 'center',
});

const states = [
  { text: 'Acre', value: 'acre' },
  { text: 'Alagoas', value: 'alagoas' },
  { text: 'Amapá', value: 'amapa' },
  { text: 'Amazonas', value: 'amazonas' },
  { text: 'Bahia', value: 'bahia' },
  { text: 'Ceará', value: 'ceara' },
  { text: 'Distrito Federal', value: 'distrito-federal' },
  { text: 'Espírito Santo', value: 'espirito-santo' },
  { text: 'Goiás', value: 'goias' },
  { text: 'Maranhão', value: 'maranhao' },
  { text: 'Mato Grosso', value: 'mato-grosso' },
  { text: 'Mato Grosso do Sul', value: 'mato-grosso-do-sul' },
  { text: 'Minas Gerais', value: 'minas-gerais' },
  { text: 'Pará', value: 'para' },
  { text: 'Paraíba', value: 'paraiba' },
  { text: 'Paraná', value: 'parana' },
  { text: 'Pernambuco', value: 'pernambuco' },
  { text: 'Piauí', value: 'piaui' },
  { text: 'Rio de Janeiro', value: 'rio-de-janeiro' },
  { text: 'Rio Grande do Norte', value: 'rio-grande-do-norte' },
  { text: 'Rio Grande do Sul', value: 'rio-grande-do-sul' },
  { text: 'Rondônia', value: 'rondonia' },
  { text: 'Roraima', value: 'roraima' },
  { text: 'Santa Catarina', value: 'santa-catarina' },
  { text: 'São Paulo', value: 'sao-paulo' },
  { text: 'Sergipe', value: 'sergipe' },
  { text: 'Tocantins', value: 'tocantins' },
];

const Home = () => {
  const { colors } = useTheme<Theme>();

  const [selectedItem, setSelectedItem] = useState<{
    text: string;
    value: string;
  }>();

  return (
    <View>
      <SelectPicker
        options={states}
        selected={selectedItem}
        onSelect={setSelectedItem}
        placeholder="Selecione o estado"
        rightIcon={
          <Ionicons name="chevron-down" size={18} color={colors.text} />
        }
      />
    </View>
  );
};

export default Home;
