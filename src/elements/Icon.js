import VectorIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import { space } from 'styled-system';

import theme from '@src/theme';

const Icon = styled(VectorIcon).attrs(props => ({
  name: props.name,
  color: theme.colors[props.color || 'white'],
  size: props.size || 25,
}))`
  ${space}
`;

export default Icon;
