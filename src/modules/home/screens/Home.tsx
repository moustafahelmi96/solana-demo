import { useAppTheme } from '@/shared/styles/themeProvider';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { hp, wp } from '@/utils';
import Typography from '@/shared/components/Typography/Typography';
import SingleTokenCard from '../components/SingleTokenCard';

const Home = () => {
  const { theme } = useAppTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.background,
      paddingHorizontal: wp(4),
    },
  });

  return (
    <>
      <SafeAreaView />
      <ScrollView style={styles.mainContainer}>
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
        <Typography
          text={'Portfolio positions'}
          alignSelf="center"
          marginTop={hp(2)}
          size={14}
          fontWeight={'bold'}
          width={'100%'}
        />
        <SingleTokenCard
          tokenName="V"
          price={'263.12'}
          priceChangePercent={'-0.12%'}
          rankInfo="1 st by 275.29"
        />
        <SingleTokenCard
          tokenName="V"
          price={'263.12'}
          priceChangePercent={'-0.12%'}
          rankInfo="1 st by 275.29"
        />
        <SingleTokenCard
          tokenName="V"
          price={'263.12'}
          priceChangePercent={'-0.12%'}
          rankInfo="1 st by 275.29"
        />
        <Typography
          text={'Featured Tokens'}
          alignSelf="center"
          marginTop={hp(4)}
          size={14}
          fontWeight={'bold'}
          width={'100%'}
        />
        <SingleTokenCard
          tokenName="V"
          price={'263.12'}
          priceChangePercent={'-0.12%'}
          rankInfo="1 st by 275.29"
        />
        <SingleTokenCard
          tokenName="V"
          price={'263.12'}
          priceChangePercent={'-0.12%'}
          rankInfo="1 st by 275.29"
        />
        <SingleTokenCard
          tokenName="V"
          price={'263.12'}
          priceChangePercent={'-0.12%'}
          rankInfo="1 st by 275.29"
        />
      </ScrollView>
    </>
  );
};

export default Home;
