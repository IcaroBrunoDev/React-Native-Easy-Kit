import { styled } from '../../config';

export const Wrapper = styled('Pressable', {
  margin: 10,
  overflow: 'hidden',
  paddingVertical: 8,
});

export const ExpandedWrapper = styled('View', { flexShrink: 1 });

export const AccordionRetracted = styled('View', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 10,
  paddingHorizontal: 20,
});

export const ArrowWrapper = styled('View', {
  marginLeft: 3,
});
