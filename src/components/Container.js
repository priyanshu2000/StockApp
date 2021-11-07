import styled from 'styled-components/native';
import { color, flexbox } from 'styled-system';

const Container = styled.View`
  ${flexbox}
  ${color}
`;

Container.defaultProps = { bg: 'white', flex: 1 };

export default Container;
