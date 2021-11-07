import styled from 'styled-components/native';
import { space } from 'styled-system';

const FlatList = styled.FlatList.attrs(props => ({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1, ...(props.containerStyle || {}) },
}))`
  ${space}
`;

export default FlatList;
