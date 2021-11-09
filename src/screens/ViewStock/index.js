import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';

import { View, Text, SafeAreaView, Icon } from '@elements';
import { Header, Container } from '@components';
import { fetchStockDetails } from '@api';

const ViewStock = ({ route, navigation }) => {
  const { item } = route.params;
  const [stockDetails, setStockDetails] = useState({});
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    getStockDetails();
  }, []);

  const getStockDetails = async () => {
    try {
      setFetching(true);
      const res = await fetchStockDetails(item['1. symbol']);
      setStockDetails(Object.values(res.data)[0]);
      setFetching(false);
    } catch (error) {
      Alert.alert(error);
    }
  };

  const hasIncreased =
    stockDetails['09. change'] && stockDetails['09. change'] > 0;
  const trendingIcon = hasIncreased ? 'trending-up' : 'trending-down';
  const trendingIconColor = hasIncreased ? 'green' : 'red';

  const Loader = () => (
    <View p={2}>
      <Placeholder Animation={Fade}>
        <PlaceholderLine width={30} height={20} noMargin />
        <View my={1}>
          <PlaceholderLine width={40} height={40} noMargin />
        </View>
        <View my={1}>
          <PlaceholderLine width={40} />
        </View>
        <View my={2}>
          <PlaceholderLine width={60} />
        </View>
        <View flexDirection="row" justifyContent="space-between">
          <PlaceholderLine width={25} height={30} />
          <PlaceholderLine width={25} height={30} />
        </View>
        <View flexDirection="row" justifyContent="space-between">
          <PlaceholderLine width={25} height={30} />
          <PlaceholderLine width={25} height={30} />
        </View>
        <PlaceholderLine width={25} height={30} />
      </Placeholder>
    </View>
  );

  const Property = ({ title, value }) => (
    <View my={3}>
      <Text fontSize={10} fontWeight="bold" color="grey">
        {title}
      </Text>
      <Text fontWeight="bold">${value}</Text>
    </View>
  );

  return (
    <Container>
      <SafeAreaView>
        <Header
          canGoBack
          title={stockDetails['01. symbol']}
          navigation={navigation}
        />
        {isFetching ? (
          <Loader />
        ) : (
          <View p={2}>
            <View>
              <Text
                textTransform="capitalize"
                fontFamily="Rubik-SemiBold"
                fontSize={18}>
                {item['2. name']}
              </Text>
              <Text fontFamily="Rubik-SemiBold" fontSize={30} color="royalBlue">
                ${stockDetails['05. price'] || 0}
              </Text>
              <View flexDirection="row" alignItems="center">
                <Icon
                  name={trendingIcon}
                  color={trendingIconColor}
                  size={18}
                  mr={2}
                />
                <Text color={trendingIconColor}>
                  {stockDetails['09. change'] || 0} {hasIncreased ? '+' : ''}
                  {stockDetails['10. change percent'] || '0%'}
                </Text>
              </View>
            </View>
            <Text my={3} color="grey">
              Latest Trading day {stockDetails['07. latest trading day']}
            </Text>
            <View flexDirection="row" justifyContent="space-between">
              <View>
                <Property title="Open" value={stockDetails['02. open'] || 0} />
                <Property title="Low" value={stockDetails['04. low'] || 0} />
                <Property
                  title="Volume"
                  value={stockDetails['06. volume'] || 0}
                />
              </View>
              <View>
                <Property
                  title="Previous Close"
                  value={stockDetails['08. previous close'] || 0}
                />
                <Property title="High" value={stockDetails['03. high'] || 0} />
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </Container>
  );
};

export default ViewStock;
