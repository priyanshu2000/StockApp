import VectorIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import { space } from 'styled-system';

const Icon = styled(VectorIcon).attrs(props => ({
  name: props.name,
  color: props.color,
  size: props.size || 16,
}))`
  ${space}
`;

export default Icon;
