import styled from 'styled-components/native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { color, flexbox, space } from 'styled-system';

const SafeAreaView = styled(RNSafeAreaView)`
  ${space}
  ${flexbox}
  ${color}
`;

SafeAreaView.defaultProps = {
  width: '100%',
  paddingX: 2,
  alignSelf: 'center',
};

export default SafeAreaView;
