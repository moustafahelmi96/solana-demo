import Typography from '@/shared/components/Typography/Typography';
import { useAppTheme } from '@/shared/styles/themeProvider';
import { hp, wp } from '@/utils';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface ISingleTokenCard {
  name: string;
  symbol: string;
  price: number;
  image: string;
  priceChangePercent: number;
}

const SingleTokenCard = ({
  name,
  symbol,
  price,
  image,
  priceChangePercent,
}: ISingleTokenCard) => {
  const { theme } = useAppTheme();
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: hp(9),
      borderRadius: wp(2),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.cardBackground,
      marginTop: hp(2),
      paddingHorizontal: wp(4),
      paddingVertical: hp(1),
    },
    tokenImage: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(2),
    },
    infoContainer: {
      width: '55%',
      height: '100%',
      justifyContent: 'center',
      gap: hp(0.5),
    },
    statisticsContainer: {
      paddingLeft: wp(2),
      height: '100%',
      justifyContent: 'space-evenly',
    },
  });
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.tokenImage}
      />
      <View style={styles.infoContainer}>
        <Typography
          text={name}
          alignSelf="center"
          size={14}
          fontWeight={'bold'}
          color={theme.text}
          textAlign="left"
          width={'100%'}
          maxChar={30}
        />
        <Typography
          text={symbol}
          alignSelf="center"
          size={11}
          fontWeight={'bold'}
          color={theme.secondaryText}
          textAlign="left"
          width={'100%'}
        />
      </View>
      <View style={styles.statisticsContainer}>
        <Typography
          text={`${price?.toFixed(2)}`}
          alignSelf="center"
          size={12}
          fontWeight={'bold'}
          color={theme.text}
        />
        <Typography
          text={`${priceChangePercent}`}
          alignSelf="center"
          size={10}
          fontWeight={'bold'}
          color={priceChangePercent < 0 ? theme.failure : theme.success}
        />
      </View>
    </View>
  );
};

export default SingleTokenCard;
