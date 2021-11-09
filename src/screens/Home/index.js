import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';

import { SafeAreaView, View, TextInput, Icon, FlatList, Text } from '@elements';
import { Container } from '@components';
import { useDebounce } from '@hooks';
import { fetchSymbolListItems } from '@api';

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [symbolList, setSymbolList] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const debouncedSearchExpression = useDebounce(searchText);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      fetchSymbolList();
    }
  }, [debouncedSearchExpression]);

  const fetchSymbolList = async () => {
    try {
      setFetching(true);
      const res = await fetchSymbolListItems(debouncedSearchExpression);
      setSymbolList(res.data.bestMatches);
      setFetching(false);
    } catch (error) {
      Alert.alert(error);
    }
  };

  const onClearButtonPress = () => {
    setSymbolList([]);
    setSearchText('');
  };

  const renderListItem = ({ item, index }) => (
    <View
      key={index}
      p={3}
      isButton
      onPress={() => navigation.navigate('ViewStock', { item: item })}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth="0.5px"
      borderColor="lightGrey">
      <View flexDirection="row">
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
      <SafeAreaView flex={1} padding={2}>
        <View flex={1}>
          <View
            bg="royalBlue"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            borderRadius={8}
            p={10}>
            {isFetching ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Icon name="search" />
            )}
            <TextInput
              placeholder="Search Symbol ex: IBM"
              width="80%"
              autoFocus
              value={searchText}
              onChangeText={setSearchText}
            />
            <View isButton onPress={onClearButtonPress}>
              <Icon name="close-circle" />
            </View>
          </View>
          <FlatList
            data={symbolList}
            renderItem={renderListItem}
            onScrollBeginDrag={() => Keyboard.dismiss()}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default Home;
