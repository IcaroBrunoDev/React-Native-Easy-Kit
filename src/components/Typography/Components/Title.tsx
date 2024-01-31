import React, { type FC } from 'react';

import { styled, useTheme } from '../../../../base.config';
import type { BaseText } from '../Models';

const Title: FC<BaseText> = ({ children, style }) => {
  const { colors } = useTheme();

  return <Base style={[{ color: colors.text }, style]}>{children}</Base>;
};

const Base = styled('Text', {
  fontSize: 15,
  fontWeight: '800',
  fontFamily: '$OpenSans',
});

export default Title;
