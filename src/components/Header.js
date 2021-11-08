import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, SafeAreaView, Icon } from '@elements';

const Header = ({
  navigation,
  title,
  canGoBack,
  onGoingBack,
  moreActions,
  isBackgroundLight = false,
}) => {
  const actionIcon = (name, onPressFn, size = 22, noPadding = false) => {
    return (
      <View onPress={onPressFn} pr={noPadding ? 0 : 3} isButton>
        <Icon
          name={name}
          color={isBackgroundLight ? 'darkGrey' : 'white'}
          size={size}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      edges={['top']}
      bg={isBackgroundLight ? '' : 'royalBlue'}
      width="100%">
      <View
        height={56}
        justifyContent="space-between "
        alignItems="center"
        flexDirection="row">
        <View flexDirection="row" alignItems="center">
          {canGoBack &&
            actionIcon('chevron-back', () => {
              if (navigation.canGoBack()) {
                navigation.goBack();
                onGoingBack && onGoingBack();
              }
            })}
          <Text
            color={isBackgroundLight ? 'darkGrey' : 'white'}
            fontSize={18}
            fontWeight="bold"
            textTransform="uppercase">
            {title}
          </Text>
        </View>
        <View flexDirection="row">
          {moreActions &&
            actionIcon('ellipsis-vertical', moreActions, 22, true)}
        </View>
      </View>
    </SafeAreaView>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  onGoingBack: PropTypes.func,
  canGoBack: PropTypes.bool,
  moreActions: PropTypes.func,
  isBackgroundLight: PropTypes.bool,
};

export default Header;
