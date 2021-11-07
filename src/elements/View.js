import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';

const View = styled.TouchableOpacity.attrs((props) => ({
  disabled: !props.isButton,
  pointerEvents: props.isButton ? 'auto' : 'none',
}))`
  ${space}
  ${flexbox}
  ${color}
  ${layout}
  ${position}
  ${border}
`;

View.defaultProps = {};

export default View;
