import React from 'react';
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

const Home = () => {
  const { theme } = useAppTheme();
  const { tokens, refetch, loading } = useTokens();

  const styles = StyleSheet.create({
    mainContainer: {
      width: '100%',
      backgroundColor: theme.background,
      paddingHorizontal: wp(4),
    },
  });

  const renderHeader = () => (
    <>
      <SearchBar />
      <Typography
        text={'Total Balance (USDT)'}
        alignSelf="center"
        marginTop={hp(2)}
        size={11}
        color={theme.secondaryText}
      />
      <Typography
        text={'192,926.38'}
        alignSelf="center"
        marginTop={hp(1)}
        size={24}
        fontWeight={'bold'}
        color={theme.text}
      />
      <Typography
        text={'+1,764$ (5.93%)'}
        alignSelf="center"
        marginTop={hp(1)}
        size={11}
        fontWeight={'bold'}
        color={theme.success}
      />
      {/* <Typography
          text={'Portfolio positions'}
          alignSelf="center"
          marginTop={hp(2)}
          size={14}
          fontWeight={'bold'}
          width={'100%'}
        /> */}
      {tokens?.length > 0 && (
        <Typography
          text={'Featured Tokens'}
          alignSelf="center"
          marginTop={hp(2)}
          size={14}
          fontWeight={'bold'}
          width={'100%'}
        />
      )}
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
            <RefreshControl refreshing={loading} onRefresh={refetch} />
          }
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={emptyState}
        />
      </View>
    </>
  );
};

export default Home;
