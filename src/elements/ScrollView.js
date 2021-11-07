import styled from 'styled-components/native';
import { space } from 'styled-system';

const ScrollView = styled.ScrollView.attrs(() => ({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
}))`
  ${space}
`;

export default ScrollView;
