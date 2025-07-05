import React, { useEffect } from 'react';
import { useAppTheme } from '@/shared/styles/themeProvider';
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import { hp, wp } from '@/utils';
import Typography from '@/shared/components/Typography/Typography';
import SingleTokenCard from '../components/SingleTokenCard';
import useTokens from '../services/useToken';
import { IToken } from '../services/types';
import BackHeader from '@/shared/BackHeader/BackHeader';

const AllTokens = () => {
  const { theme } = useAppTheme();
  const { tokens, fetchTokens, loading } = useTokens({ limit: 20, page: 1 });

  useEffect(() => {
    fetchTokens();
  }, []);

  const styles = StyleSheet.create({
    mainContainer: {
      width: '100%',
      backgroundColor: theme.background,
      paddingHorizontal: wp(4),
    },
  });

  const renderHeader = () => (
    <>
      <BackHeader />
      <SearchBar />
    </>
  );

  const renderItem = ({ item }: { item: IToken }) => (
    <SingleTokenCard
      name={item.name}
      symbol={item.symbol}
      image={item.image}
      price={item.current_price}
      priceChangePercent={item.price_change_percentage_24h}
    />
  );

  const emptyState = () => (
    <View>
      <Typography
        text={'No tokens found'}
        textAlign="center"
        marginTop={hp(6)}
      />
    </View>
  );

  return (
    <>
      <SafeAreaView />
      <View style={styles.mainContainer}>
        <FlatList
          data={tokens}
          ListHeaderComponent={renderHeader}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={fetchTokens} />
          }
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={emptyState}
        />
      </View>
    </>
  );
};

export default AllTokens;
