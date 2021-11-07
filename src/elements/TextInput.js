import styled from 'styled-components/native';

import { system, color, space, typography, border } from 'styled-system';
import theme from '@src/theme';

const TextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor || 'darkGrey'],
}))`
  ${border}
  ${color}
  ${space}
  ${typography}
  ${system({
    textDecoration: {
      property: 'textDecoration',
      cssProperty: 'textDecoration',
    },
  })}
`;

TextInput.defaultProps = {
  color: 'darkGrey',
  fontSize: 14,
  fontFamily: 'normal',
  textAlignVertical: 'top',
  paddingTop: 0,
  paddingBottom: 0,
};

export default TextInput;
