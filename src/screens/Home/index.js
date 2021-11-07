import React from 'react';

import { SafeAreaView, View, TextInput, Icon, FlatList, Text } from '@elements';
import { Container } from '@components';
import { dataList } from '@constants';

const Home = () => {
  const renderListItem = ({ item }) => (
    <View
      p={3}
      isButton
      onPress={item.action}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth="0.5px"
      borderColor="lightGrey">
      <View alignItems="center" flexDirection="row">
        <Icon name="trending-up" color="darkGrey" mr={3} />
        <Text fontWeight="bold">{Object.values(item)[0]}</Text>
      </View>
      <View width="55%">
        <Text textTransform="capitalize">{Object.values(item)[1]}</Text>
      </View>
    </View>
  );

  return (
    <Container>
      <SafeAreaView padding={2}>
        <View>
          <View
            bg="royalBlue"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            borderRadius={8}
            p={10}>
            <Icon name="search" />
            <TextInput placeholder="Symbol Ex: IBM" width="80%" />
            <Icon name="close-circle" />
          </View>
          <FlatList
            data={dataList}
            renderItem={renderListItem}
            keyExtractor={({ index }) => index}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default Home;
