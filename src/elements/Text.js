import styled from 'styled-components/native';
import { system, color, space, typography } from 'styled-system';

const Text = styled.Text`
  ${color}
  ${space}
  ${typography}
  ${system({
    textDecoration: {
      property: 'textDecoration',
      cssProperty: 'textDecoration',
    },
    textTransform: { property: 'textTransform', cssProperty: 'textTransform' },
  })}
`;

Text.defaultProps = {
  color: 'textPrimary',
  fontSize: 14,
  fontFamily: 'normal',
};

export default Text;
