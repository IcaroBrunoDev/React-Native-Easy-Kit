import React, { useCallback, useMemo, useRef, useState, type FC } from 'react';
import { Animated, LayoutAnimation, Platform, UIManager } from 'react-native';

import Text from '../Typography/Components/Text';

import { useTheme } from '../../config';

import {
  AccordionRetracted,
  ArrowWrapper,
  ExpandedWrapper,
  Wrapper,
} from './styles';

import useVariant from '../../hooks/variants';
import type { AccordionProps } from './Models';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion: FC<AccordionProps> = ({
  title,
  icon,
  style,
  color,
  variant,
  rounded,
  labelColor,
  children,
}) => {
  const { apply } = useVariant();
  const { colors } = useTheme();

  const arrowAnimation = useRef(new Animated.Value(0)).current;
  const expandedAnimation = useRef(new Animated.Value(0)).current;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const styles = useMemo(() => {
    const { primary, white } = colors;

    const style = {
      color: labelColor ?? white,
      borderRadius: rounded ? 8 : 0,
      backgroundColor: color ?? primary,
    };

    return apply(style, variant);
  }, [apply, rounded, colors, color, variant, labelColor]);

  const expandAccordion = useCallback(
    (expandedStatus: boolean) => {
      const toValue = expandedStatus ? 1 : 0;

      Animated.parallel([
        Animated.timing(arrowAnimation, {
          toValue,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(expandedAnimation, {
          toValue,
          duration: 250,
          useNativeDriver: false,
        }),
      ]).start();

      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

      setIsExpanded(expandedStatus);
    },
    [arrowAnimation, expandedAnimation]
  );

  return (
    <Wrapper
      style={[styles, style]}
      onPress={() => expandAccordion(!isExpanded)}
    >
      <AccordionRetracted>
        <Text style={{ maxWidth: '90%', width: 'auto', color: styles.color }}>
          {title}
        </Text>
        {icon && (
          <AnimatedArrow
            style={{
              transform: [
                {
                  rotate: arrowAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg'],
                  }),
                },
              ],
            }}
          >
            {icon}
          </AnimatedArrow>
        )}
      </AccordionRetracted>

      <AccordionExpanded
        style={{
          padding: expandedAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 15],
          }),
        }}
      >
        {isExpanded && children}
      </AccordionExpanded>
    </Wrapper>
  );
};

const AnimatedArrow = Animated.createAnimatedComponent(ArrowWrapper);

const AccordionExpanded = Animated.createAnimatedComponent(ExpandedWrapper);

export default Accordion;
